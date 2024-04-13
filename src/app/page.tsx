import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-300 via-pink-200 to-sky-200">
      <div className="flex items-center font-extrabold">
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
          className="font-semibold hover:bg-transparent hover:text-black hover:outline">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </main>
  );
};
