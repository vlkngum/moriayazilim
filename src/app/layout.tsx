import "./globals.css";

import { poppins } from "@/app/ui/fonts";


import ClientLayoutWrapper from "@/app/ClientLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moria Yazılım",
  description: "Moria Yazılım, profesyonel web tasarım, yazılım geliştirme, e-ticaret çözümleri, SEO hizmetleri ve dijital pazarlama alanlarında yenilikçi çözümler sunan web ajansı.",
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