import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    supabaseAccessToken?: string;
    supabaseRefreshToken?: string;
  }

  interface Session {
    user: User & {
      supabaseAccessToken?: string;
      supabaseRefreshToken?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    supabaseAccessToken?: string;
    supabaseRefreshToken?: string;
  }
}
