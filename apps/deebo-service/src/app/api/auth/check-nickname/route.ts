import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!);

export async function POST(request: NextRequest) {
  const { nickname } = await request.json();

  if (!nickname) {
    return NextResponse.json(
      { error: "닉네임이 제공되지 않았습니다." },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await supabase
      .from("users") // 'users'는 실제 테이블 이름으로 변경해야 합니다.
      .select("nickname")
      .eq("nickname", nickname)
      .single();

    if (error) {
      throw error;
    }

    const isDuplicate = data !== null;

    return NextResponse.json({ isDuplicate });
  } catch (error) {
    console.error("닉네임 확인 중 오류 발생:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
