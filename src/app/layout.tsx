import "./globals.css";

import { poppins } from "@/app/ui/fonts";


import ClientLayoutWrapper from "@/app/ClientLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moria Yazılım",
  description: "Moria Yazılım Web Ajansı",
  icons: "/favicon.ico",  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`${poppins.className} antialiased bg-black text-white`}>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </body>
      </html>
  );
}