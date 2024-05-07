import NextAuth from "next-auth"
import {nextAuthConfig} from "@/app/lib/nextAuth";


const handler = NextAuth(nextAuthConfig)

export { handler as GET, handler as POST }