import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/sign-in");
        }
    }, [session, status, router]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default RequireAuth;