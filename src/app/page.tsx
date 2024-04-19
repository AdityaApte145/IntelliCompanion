import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
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
          className="font-semibold">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </main>
  );
};
