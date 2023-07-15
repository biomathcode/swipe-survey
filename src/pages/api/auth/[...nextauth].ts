import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "lib/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
};
export default NextAuth(authOptions);
