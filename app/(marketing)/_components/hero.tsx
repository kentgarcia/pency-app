"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";

import { StarIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { BrandIcons } from "@/components/shared/brand-icons";
import Icons from "@/components/shared/icons";

import { Spinner } from "@/components/spinner";
import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import { nFormatter } from "@/lib/utils";

export const Hero = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  // const { stargazers_count: stars } = await fetch(
  //   "https://api.github.com/repos/moinulmoin/chadnext",
  //   {
  //     cache: "no-store",
  //   }
  // )
  //   .then((res) => res.json())
  //   .catch((e) => console.error(e));

  return (
    <section>
      <div className="container flex w-full flex-col items-center justify-center space-y-20 py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="mx-auto w-full max-w-2xl ">
          <a
            href="https://twitter.com/"
            title="Follow Updates"
            target="_blank"
            rel="noopener"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors duration-300 hover:bg-blue-200"
          >
            <Icons.twitter className="h-5 w-5 text-blue-700" />
            <p className="text-sm font-semibold text-blue-700">
              Introducing Pency
            </p>
          </a>
          <h1 className=" text-balance bg-gradient-to-br  from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent  drop-shadow-sm duration-300 ease-linear [word-spacing:theme(spacing.1)] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:text-7xl md:leading-[5rem]">
            Say Goodbye to Cluttered Notes with Pency.
          </h1>
          <p className="mt-6 text-balance text-center text-muted-foreground md:text-xl">
            Discover how Pency&apos;s user-friendly design can help you
            streamline your thoughts and boost productivity
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
            {isLoading && (
              <div className="flex items-center justify-center">
                <Spinner size="lg" />
              </div>
            )}
            {isAuthenticated && !isLoading && (
              <Button asChild className="rounded-xl">
                <Link href="/documents">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            )}
            {!isAuthenticated && !isLoading && (
              <SignInButton mode="modal">
                <Button className="rounded-xl">
                  Get Pency free
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </SignInButton>
            )}

            <Link
              className={buttonVariants({ variant: "outline" }) + " gap-x-2 "}
              href="https://github.com/kentgarcia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-medium">{/*nFormatter(stars)*/}Star</span>
              <StarIcon width={16} />
              <span>me on</span>
              <Icons.gitHub width={16} />
            </Link>
          </div>
        </div>
        <div className="w-full ">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight transition-colors">
            Built using Great Tools
          </h2>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-10 ">
            {tools.map((t, i) => (
              <Link key={i} href={t.link} target="_blank">
                <t.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const tools = [
  {
    link: "https://www.typescriptlang.org/",
    icon: BrandIcons.ts,
  },
  {
    link: "",
    icon: BrandIcons.react,
  },
  {
    link: "https://nextjs.org/",
    icon: BrandIcons.nextjs,
  },
  {
    link: "https://tailwindcss.com/",
    icon: BrandIcons.tailwind,
  },
  {
    link: "",
    icon: BrandIcons.clerk,
  },
  {
    link: "",
    icon: BrandIcons.radix,
  },
];
