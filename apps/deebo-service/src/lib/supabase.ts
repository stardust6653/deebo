import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

const supabase = createClient(supabaseUrl, supabaseUrl);

export async function checkNicknameDuplicate(nickname: string) {
  const { data, error } = await supabase
    .from("users") // 'users'는 사용자 정보가 저장된 테이블 이름입니다. 실제 테이블 이름으로 변경해주세요.
    .select("nickname")
    .eq("nickname", nickname)
    .single();

  if (error) {
    console.error("Error checking nickname:", error);
    return false;
  }

  return data !== null; // 데이터가 있으면 중복, 없으면 사용 가능
}
