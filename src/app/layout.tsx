import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/output.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alibaba Web Clone",
  description:
    "Alibaba web clone (template) build with NextJS and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
