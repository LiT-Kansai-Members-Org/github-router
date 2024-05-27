import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LiT! Kansai MembersのGitHub",
  description: "LiT!関西メンバー達のGitHub Organizationやで！",
  twitter: {
    card: "summary",
    site: "@LiTKansaiMember",
    creator: "@LiTKansaiMember",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
