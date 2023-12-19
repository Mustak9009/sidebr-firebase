import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
const SideBar = dynamic(()=>import('@/components/sidebar'),{
  ssr:false
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex md:gap-10">
          <SideBar />
          {/* flex-1 is importent here :  to allow a flex item to grow and shrink as needed, ignoring its initial size:*/}
          <main className="max-w-screen-2xl flex-1 mx-auto py-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
