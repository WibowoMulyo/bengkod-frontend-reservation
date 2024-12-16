import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOption: AuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        id: {
          type: "number"
        },
        name: {
          type: "number"
        },
        email_mhs: {
          type: "email"
        },
        image: {
          type: "text"
        },
        token: {
          type: "text"
        },
      },
      authorize: async (credentials, req) => {
        return credentials || null
      }
    })
  ]
  ,
  callbacks: {
    jwt: async ({user, token}) => {
      if(user){
        token.id = +user.id;
        token.token = user.token;
        token.email_mhs = user.email_mhs;
        token.image = user.image;
        token.name = user.name
      }
      return token
    },
    session: async ({session, token}) => {
      if(session?.user){
        session.user.id = token.id as number
        session.user.name = token.name as string
        session.user.token = token.token as string
        session.user.image = token.image as string
        session.user.email_mhs = token.email_mhs as string
      }
      
      return session
    }
  }
}