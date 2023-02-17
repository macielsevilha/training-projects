import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../prisma/client'

const adapter = PrismaAdapter(prisma)

export const authOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: '812255616587-gsnfhmqbhtbuuc6nd9bjgc9em1raegk8.apps.googleusercontent.com',
        clientSecret: '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',
        
      }),
    ],
}
export default NextAuth(authOptions)

// {
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.AUTH_SECRET,
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// }