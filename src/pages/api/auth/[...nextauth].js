import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "lib/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret:
    process.env.NEXTAUTH_SECRET ||
    "qMCXK8JA03jxf8AyU9iA0RIwviOnw1ZJcY8eIMMs3Bc=",

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  theme: {
    colorSchema: "light",
    logo: "https://swipe-survey.vercel.app/favicon/android-chrome-192x192.png",
  },
};
export default NextAuth(authOptions);
