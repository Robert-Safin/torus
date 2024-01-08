"use client";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import useChangeNavColor from "@/app/lib/useChangeNavColor";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [walledOpen, setWalletOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navColor = useChangeNavColor();

  return (
    <nav
      className={`w-full h-auto backdrop-blur-md fixed
    top-0 text-white z-20 px-6 pt-6 transition-all duration-500
    ${navColor === "black" ? "text-text-black" : "text-white"}
    `}
    >
      <div className="flex justify-between">
        <p className="font-bruno">T O R U S</p>
        <div className="tablet:space-x-20 hidden tablet:flex section-subheader">
          <p>Home</p>
          <p>Stacking</p>
          <p>Rewards</p>
          <p>FAQ</p>
        </div>
        <div className="flex space-x-8">
          <div
            className="relative pb-6 pl-6"
            onMouseEnter={() => setWalletOpen(true)}
            onMouseLeave={() => setWalletOpen(false)}
          >
            <FaWallet className="w-6 h-auto" />
            {walledOpen && (
              <div className="absolute bg-card-glass border border-glass-stroke right-0 top-[48px] py-4 px-8">
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
              <div className="absolute flex flex-col space-y-4 bg-card-glass border border-glass-stroke right-0 top-[48px] py-4 px-8">
                <Link href="#">Home</Link>
                <Link href="#">Stacking</Link>
                <Link href="#">Rewards</Link>
                <Link href="#">FAQ</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
