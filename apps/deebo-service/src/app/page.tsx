import AuthBanner from "@/components/common/auth/AuthBanner";
import AuthPageLayout from "@/components/common/layout/AuthPageLayout";
import LoginForm from "@/components/pages/Login/LoginForm";

export default function Home() {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
}

// supabase auth 데이터 모두 삭제

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// async function deleteAllUsers() {
//   const { data: users, error: fetchError } =
//     await supabase.auth.admin.listUsers();

//   if (fetchError) {
//     console.error("Error fetching users:", fetchError);
//     return;
//   }

//   for (const user of users.users) {
//     const { error: deleteError } = await supabase.auth.admin.deleteUser(
//       user.id
//     );
//     if (deleteError) {
//       console.error(`Error deleting user ${user.id}:`, deleteError);
//     } else {
//       console.log(`Deleted user ${user.id}`);
//     }
//   }
// }

// deleteAllUsers();
