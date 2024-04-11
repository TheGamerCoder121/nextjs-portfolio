// "use client";
import Image from "next/image";
import Snow from "@/components/snow";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div
      >
        <Snow></Snow>
        <h1 className="lg:text-9xl font-bold p-24">Nicklaus Vega</h1>
      </div>
    </main>
  );
}
