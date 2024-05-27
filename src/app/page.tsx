"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://github.com/LiT-Kansai-Members-Org");
  }, []);

  return <></>;
}
