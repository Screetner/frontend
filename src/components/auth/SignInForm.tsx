"use client";
import { signIn } from "next-auth/react";
import {SyntheticEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function SignInForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleSubmit = async (e : SyntheticEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if(result?.ok){
            router.push("/");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto p-6 bg-white rounded-md shadow-md"
        >
            <div className="mb-4">
                <label htmlFor="username" className="block font-bold mb-2">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block font-bold mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
            >
                Sign In
            </button>
        </form>
    );
}