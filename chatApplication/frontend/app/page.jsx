import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="h-full  flex items-center flex-col p-24">
        <h1 className="text-gray-400  text-3xl font-light">chatting app</h1>
        <navbar>
          <ul>
            <Link href="./chat" className="text-white ">
              message
            </Link>
          </ul>
        </navbar>
      </main>
    </>
  );
};

export default Home;
