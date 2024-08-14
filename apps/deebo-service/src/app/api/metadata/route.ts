// app/api/metadata/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

// 메모리 캐시 추가
const cache = new Map();

export async function GET(request: NextRequest) {
  console.log("API route accessed");

  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  console.log("Requested URL:", url);

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  // 캐시된 결과가 있으면 반환
  if (cache.has(url)) {
    return NextResponse.json(cache.get(url));
  }

  try {
    console.log("Fetching URL:", url);
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      timeout: 5000, // 5 seconds timeout
    });

    console.log("Response status:", response.status);

    if (typeof response.data !== "string") {
      throw new Error("Unexpected response type");
    }

    const html = response.data;
    const $ = cheerio.load(html);

    const metadata = {
      title: $("title").text() || null,
      description: $('meta[name="description"]').attr("content") || null,
      ogTitle: $('meta[property="og:title"]').attr("content") || null,
      ogDescription:
        $('meta[property="og:description"]').attr("content") || null,
      ogImage: $('meta[property="og:image"]').attr("content") || null,
    };

    // 결과를 캐시에 저장
    cache.set(url, metadata);

    console.log("Metadata fetched:", metadata);

    return NextResponse.json(metadata);
  } catch (error) {
    console.error("Error fetching metadata:", error);
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error details:",
        error.response?.status,
        error.response?.data
      );
      return NextResponse.json(
        { error: `Failed to fetch metadata: ${error.message}` },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to fetch or parse metadata" },
      { status: 500 }
    );
  } finally {
    // 명시적으로 가비지 컬렉션 호출 (주의: 프로덕션 환경에서는 권장되지 않음)
    if (global.gc) {
      global.gc();
    }
  }
}

// 주기적으로 캐시 정리
setInterval(
  () => {
    cache.clear();
  },
  1000 * 60 * 60
); // 1시간마다
