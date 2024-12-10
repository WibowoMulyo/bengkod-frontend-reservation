import { DefaultSession } from "next-auth"
import NextAuth from "next-auth/next"

declare module "next-auth" {
  interface Session {
    user: {
      id: number,
      token: string,
      email_mhs: string,
    } & DefaultSession["user"]
  }

  interface User{
    token: string,
    email_mhs: string,
  }
}