"use client";
import { useState } from "react";
import PaddedContainer from "../ui/containers/PaddedContainer";
import { FaWallet } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUser } from "@auth0/nextjs-auth0/client";
const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [walledOpen, setWalletOpen] = useState(false);

  return (
    <nav
      className="w-full h-auto backdrop-blur-md fixed
    top-0 text-white  py-6 z-20"
    >
      <PaddedContainer>
        <div className="flex justify-between">
          <p className="font-bruno">T O R U S</p>
          <div className="tablet:space-x-20 hidden tablet:flex section-subheader">
            <p>Home</p>
            <p>Stacking</p>
            <p>Rewards</p>
            <p>FAQ</p>
          </div>
          <div className="flex space-x-8">
            <div className="relative">
              <FaWallet
                className="w-6 h-auto text-white"
                onClick={() => setWalletOpen(!walledOpen)}
              />
              {walledOpen && (
                <div className="absolute  bg-card-glass border border-glass-stroke right-0 top-12 p-4">
                  {!user && <a href="/api/auth/login">Login</a>}
                  {user && <a href="/api/auth/logout">Logout</a>}
                  {user && <p>{user.nickname}</p>}
                </div>
              )}
            </div>
            <div>
              <RxHamburgerMenu
                className="tablet:hidden w-6 h-auto text-white"
                onClick={() => setWalletOpen(!walledOpen)}
              />
            </div>
          </div>
        </div>
      </PaddedContainer>
    </nav>
  );
};

export default Navbar;
