import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export function useAuth() {
    const { data: clientSideSession } = useSession();
    const router = useRouter();

    const requireAuthClientSide = () => {
        if (!clientSideSession) {
            router.push("/sign-in");
        }
    }

    useEffect(() => {
        requireAuthClientSide()
    }, []);

    return {
        data: clientSideSession,
    };
}
