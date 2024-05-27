"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PathPage({ params }: { params: { path: string } }) {
  const { path } = params;
  const router = useRouter();

  useEffect(() => {
    router.push(`https://github.com/LiT-Kansai-Members-Org/${path}`);
  }, []);

  return <></>;
}
