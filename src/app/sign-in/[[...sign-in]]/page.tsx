import { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Sign In - IntelliCompanion",
};

export default function SignInPage() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <SignIn appearance={{variables: {colorPrimary: "black"}}} />
        </div>
    );
}