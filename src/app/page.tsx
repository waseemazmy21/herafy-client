"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/home/hero";
import Cta from "@/components/home/cta";
import Categories from "@/components/home/categories";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token && user.role) {
      user.role === "client"
        ? router.push("/client")
        : router.push("/craftsman");
    }
  }, [router]);

  return (
    <div className="mb-20 flex flex-col gap-20">
      <Hero />
      <Cta />
      <Categories />
    </div>
  );
}
