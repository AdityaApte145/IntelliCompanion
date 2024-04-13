import { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Sign In - IntelliCompanion",
};

export default function SignInPage() {
    return (
        <div className="flex flex-col h-screen items-center justify-center bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-300 via-pink-200 to-sky-200">
            <SignIn appearance={{variables: {colorPrimary: "black"}}} />
        </div>
    );
}