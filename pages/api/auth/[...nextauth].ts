import { fetcher } from "@/utils/fetcher";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type LoginSuccessResponse = {
  success: boolean;
  status_code: number;
  data: {
    access_token: string;
    name: string;
    picture: string;
  };
};

export const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET_KEY,
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, 
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Planthub Admin Login",
      credentials: {
        email: { label: "email" },
        password: { label: "password" },
      },
      async authorize(credentials, req) {
        try {
          const result: LoginSuccessResponse = await fetcher({
            url: "/admin/login",
            method: "POST",
            data: credentials,
          });

          return {
            access_token: result.data.access_token,
            name: result.data.name,
            picture: result.data.picture,
          };
        } catch (error) {
          throw new Error(JSON.stringify(error));
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.picture = user.picture;
        token.access_token = user.access_token;
      }
      return token;
    },

    session({ session, token }) {
      session.user.name = token.name;
      session.user.picture = token.picture;
      session.user.access_token = token.access_token;

      delete session.user.email;
      delete session.user.image;
      return session;
    },
  },
};

export default NextAuth(authOptions);
