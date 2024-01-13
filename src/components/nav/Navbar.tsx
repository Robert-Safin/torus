"use client";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import useChangeNavColor from "@/lib/useChangeNavColor";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [walledOpen, setWalletOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navColor = useChangeNavColor();

  return (
    <nav
      className={`w-full h-auto backdrop-blur-md fixed
    top-0 text-white z-20 px-6 pt-6 transition-all duration-500 bg-opacity-5
    ${navColor === "black" ? "text-white" : "text-black"}
    ${navColor === "black" ? "bg-white" : "bg-black"}
    `}
    >
      <div className="flex justify-between">
        <Link href={"/"} className="font-bruno">
          T O R U S
        </Link>
        <div className="tablet:space-x-20 hidden tablet:flex section-subheader">
          <Link href="/">Home</Link>
          <Link href="/stacking">Stacking</Link>
          <Link href="/rewards">Rewards</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="flex space-x-8">
          <div
            className="relative pb-6 pl-6"
            onMouseEnter={() => setWalletOpen(true)}
            onMouseLeave={() => setWalletOpen(false)}
          >
            <FaWallet className="w-6 h-auto" />
            {walledOpen && (
              <div className="absolute bg-card-glass border border-glass-stroke right-0 top-[48px] py-4 px-8 animate-fade">
                {!user && <a href="/api/auth/login">Login</a>}
                {user && <a href="/api/auth/logout">Logout</a>}
                {user && <p>{user.nickname}</p>}
              </div>
            )}
          </div>
          <div
            className="tablet:hidden relative pb-6 pl-6"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <RxHamburgerMenu className="w-6 h-auto" />
            {menuOpen && (
              <div className="absolute flex flex-col space-y-4 bg-card-glass border border-glass-stroke right-0 top-[48px] py-4 px-8 animate-fade">
                <Link href="/">Home</Link>
                <Link href="/stacking">Stacking</Link>
                <Link href="/rewards">Rewards</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
