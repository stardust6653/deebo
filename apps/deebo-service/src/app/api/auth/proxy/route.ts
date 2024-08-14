import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url, {
      headers: {
        Referer: new URL(request.url).origin,
        Origin: new URL(request.url).origin,
      },
    });

    const contentType = response.headers.get("content-type");
    const arrayBuffer = await response.arrayBuffer();

    const headers = new Headers({
      "Content-Type": contentType || "application/octet-stream",
      "Referrer-Policy": "no-referrer",
    });

    return new NextResponse(arrayBuffer, { headers });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the resource" },
      { status: 500 }
    );
  }
}
