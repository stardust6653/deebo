import { createClient } from "@supabase/supabase-js";
import NextAuth, { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface CustomUser extends NextAuthUser {
  nickname?: string;
  type?: string;
  gender?: string;
  birthday?: string;
  supabaseAccessToken?: string;
  supabaseRefreshToken?: string;
}

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

        return {
          id: data.user.id,
          email: data.user.email,
          nickname: data.user.user_metadata?.nickname,
          type: data.user.user_metadata?.type,
          gender: data.user.user_metadata?.gender,
          birthday: data.user.user_metadata?.birthday,
          supabaseAccessToken: data.session?.access_token,
          supabaseRefreshToken: data.session?.refresh_token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as CustomUser;
        token.id = customUser.id;
        token.email = customUser.email;
        token.nickname = customUser.nickname;
        token.type = customUser.type;
        token.gender = customUser.gender;
        token.birthday = customUser.birthday;
        token.supabaseAccessToken = customUser.supabaseAccessToken;
        token.supabaseRefreshToken = customUser.supabaseRefreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.nickname = token.nickname as string;
        session.user.type = token.type as string;
        session.user.gender = token.gender as string;
        session.user.birthday = token.birthday as string;
        session.user.supabaseAccessToken = token.supabaseAccessToken as string;
        session.user.supabaseRefreshToken =
          token.supabaseRefreshToken as string;
      }
      return session;
    },
  },

  pages: { signIn: "/" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
