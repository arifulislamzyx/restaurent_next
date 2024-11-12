import NextAuth, { Account } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../server/models/user.schema";
import { JWT } from "next-auth/jwt";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({
      token,
      user,
      account,
    }: {
      token: JWT;
      user: any;
      account: Account | null;
    }) {
      if (account) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials provided");
        }
        if (credentials === null) {
          return null;
        }

        try {
          const user = await User.findOne({
            email: credentials?.email,
            password: credentials?.password,
          });

          if (!user) {
            console.error("User not found");
            throw new Error("User not found");
          }

          if (credentials.password !== user.password) {
            console.error("Password mismatch");
            throw new Error("Email or Password is incorrect");
          }
          return user;
        } catch (error) {
          throw new Error("User not found");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXTAUTH_URL_GOOGLE_CLIENT || "",
      clientSecret: process.env.NEXTAUTH_URL_SECRET_GOOGLE || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_SECRET_GITHUB_CLIENT,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_GITHUB,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
