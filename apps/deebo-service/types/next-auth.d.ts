import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      nickname?: string;
      type?: string;
      gender?: string;
      birthday?: string;
      supabaseAccessToken?: string;
      supabaseRefreshToken?: string;
    } & DefaultSession["user"];
  }

  interface User {
    email?: string;
    nickname?: string;
    type?: string;
    gender?: string;
    birthday?: string;
    supabaseAccessToken?: string;
    supabaseRefreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    email?: string;
    nickname?: string;
    type?: string;
    gender?: string;
    birthday?: string;
    supabaseAccessToken?: string;
    supabaseRefreshToken?: string;
  }
}
