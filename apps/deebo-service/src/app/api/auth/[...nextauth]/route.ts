import { createClient } from "@supabase/supabase-js";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        gender: { label: "Gender", type: "text" },
        birthday: { label: "Birthday", type: "date" },
        nickname: { label: "Nickname", type: "text" },
        type: { label: "Type", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error || !data.user) {
          return null;
        }

        console.log(data);

        return {
          id: data.user.id,
          email: data.user.email,
          nickname: data.user.user_metadata?.nickname,
          type: data.user.user_metadata?.type,
          // Supabase 세션 토큰을 NextAuth 세션에 포함
          supabaseAccessToken: data.session?.access_token,
          supabaseRefreshToken: data.session?.refresh_token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.supabaseAccessToken = user.supabaseAccessToken;
        token.supabaseRefreshToken = user.supabaseRefreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.supabaseAccessToken = token.supabaseAccessToken;
        session.user.supabaseRefreshToken = token.supabaseRefreshToken;
      }
      return session;
    },
  },

  pages: { signIn: "/" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
