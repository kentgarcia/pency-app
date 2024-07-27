"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        width={300}
        height={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        width={300}
        height={300}
        alt="Empty"
        className="hidden darl:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Pency
      </h2>
      <Button>
        <PlusCircle className="h-6 w-6 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
