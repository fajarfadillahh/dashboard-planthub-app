import "next-auth";
import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    name: string;
    picture: string;
    access_token: string;
  }
}

declare module "next-auth" {
  interface User {
    access_token: string;
    name: string;
    picture: string;
    id?: string;
  }

  interface Session {
    user: {
      access_token: string;
      name: string;
      picture: string;
      image?: string;
      email?: string;
    };
  }
}
