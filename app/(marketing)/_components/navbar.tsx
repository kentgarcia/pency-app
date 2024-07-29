"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "./logo";

import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <header className="h-20 w-full">
      <div className="container h-full">
        <nav className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center text-2xl font-bold">
            <Logo />
          </Link>
          <div className="hidden items-center gap-12 lg:flex 2xl:gap-16">
            <div className="space-x-4 text-center text-sm leading-loose text-muted-foreground md:text-left flex items-center">
              <Link href="/changelog">
                <Button variant="ghost" size="sm">
                  Changelog
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm">
                  About
                </Button>
              </Link>
              {isLoading && <Spinner />}
              {!isAuthenticated && !isLoading && (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm">
                      Log in
                    </Button>
                  </SignInButton>
                  <SignInButton mode="modal">
                    <Button size="sm">Get Pency free</Button>
                  </SignInButton>
                </>
              )}
              {isAuthenticated && !isLoading && (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/documents">Enter Pency</Link>
                  </Button>
                  <UserButton afterSignOutUrl="/" />
                </>
              )}
              <ModeToggle />
            </div>
          </div>
        </nav>
        {/* <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-12 mx-4",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Pency free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Pency</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div> */}
      </div>
    </header>
  );
};
