import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function LandingPage() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-100 via-emerald-200 to-emerald-100">
      <div className="flex items-center font-extrabold">
        <Image src={logo} alt="IntelliCompanion Logo" width={128} height={128}></Image>
        <span className="font-extrabold sm:text-3xl md:text-4xl lg:text-6xl">
          IntelliCompanion
        </span>
      </div>
      <div>
        <p className="font-medium sm:text-3xl md:text-2xl lg:text-3xl">
          This is an Intelligent Virtual Assistant
        </p>
      </div>
      <div>
        <Button
          asChild
          className="font-semibold bg-black text-white hover:bg-transparent hover:outline hover:text-black">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </main>
  );
};
