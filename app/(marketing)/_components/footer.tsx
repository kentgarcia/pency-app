import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="md:py- relative z-10 w-full border-t py-4">
      <div className="container flex items-center justify-between gap-4 md:h-14 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Developed by{" "}
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Kent Garcia
            </Link>
          </p>
        </div>

        <div className=" space-x-5">
          <div
            className="md:ml-auto w-full justify-between
            md:justify-end flex items-center gap-x-2
            text-muted-foreground"
          >
            <Button variant="ghost" size="sm">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
      {/*  <div className="flex items-center
         w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
             <Logo/>
             <div className="md:ml-auto w-full justify-between
             md:justify-end flex items-center gap-x-2
             text-muted-foreground">
                 <Button variant="ghost" size="sm">
                 Privacy Policy</Button>
             <Button variant="ghost" size="sm">
               Terms of Service</Button>
             </div>
         </div> */}
    </footer>
  );
};
