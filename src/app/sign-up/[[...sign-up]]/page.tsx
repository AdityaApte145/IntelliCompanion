import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Sign Up - IntelliCompanion",
};

export default function SignUpPage() {
    return (
        <div className="flex flex-col h-screen items-center justify-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-100 via-emerald-200 to-emerald-100">
            <SignUp appearance={{ variables: { colorPrimary: "black" }}} />
        </div>
    );
}