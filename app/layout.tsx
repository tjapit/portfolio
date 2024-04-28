import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tim | Personal Portfolio",
  description: "Tim is a full-stack developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="-z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] bg-[#fbe2e3] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="-z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] bg-[#dbd7fb] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
