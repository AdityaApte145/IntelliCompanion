import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Sign Up - IntelliCompanion",
};
 
export default function SignUpPage() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <SignUp appearance={{variables: {colorPrimary: "black"}}}/>
        </div>
    );
}