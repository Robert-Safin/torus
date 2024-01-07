import { FC } from "react";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/nav/Navbar";
import localFont from "next/font/local";

type Props = {
  children: React.ReactNode;
};

const bruno = localFont({
  src: "./fonts/BrunoAce-Regular.ttf",
  display: "swap",
  variable: "--font-bruno",
});

const geist = localFont({
  src: "/fonts/GeistVariableVF.woff2",
  display: "swap",
  variable: "--font-geist",
});

const inter = localFont({
  src: "/fonts/Inter-VariableFont_slnt,wght.ttf",
  display: "swap",
  variable: "--font-inter",
});

const poppins = localFont({
  src: "/fonts/Poppins-Regular.ttf",
  display: "swap",
  variable: "--font-poppins",
});

const Layout: FC<Props> = async (props) => {
  return (
    <html
      lang="en"
      className={`bg-theme-white ${inter.variable} ${geist.variable} ${bruno.variable} ${poppins.variable}`}
    >
      <UserProvider>
        <body className="bg-theme-white">
          <Navbar />
          {props.children}
        </body>
      </UserProvider>
    </html>
  );
};

export default Layout;
