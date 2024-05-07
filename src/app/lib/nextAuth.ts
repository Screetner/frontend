import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<any> {
                const tempUser = { username: "admin", password: "admin" };

                if (
                    credentials?.username === tempUser.username &&
                    credentials?.password === tempUser.password
                ) {
                    return {
                        id: 1,
                        name: "Admin",
                        email: "example@gmail.com",
                    };
                }
                return null;
            },
        }),
    ],
};
