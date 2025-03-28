"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        width={300}
        height={300}
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        width={300}
        height={300}
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        Something went wrong. Please try again later.
      </h2>
      <Button asChild>
        <Link href="/documents">
          <a>Go back</a>
        </Link>
      </Button>
    </div>
  );
};

export default Error;
