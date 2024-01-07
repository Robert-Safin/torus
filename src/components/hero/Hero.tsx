"use client";

import ButtonPrimary from "../ui/buttons/ButtonPrimary";
import PaddedContainer from "../ui/containers/PaddedContainer";

const Hero = () => {
  return (
    <div className="w-full h-[670px] relative">
      <video
        src="/torus-new.mov"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
      <div className="flex justify-center">
        <div className="w-full h-full absolute top-0 flex flex-col text-white justify-center items-center max-w-[1440px]">
          <PaddedContainer>
            <div className="grid grid-cols-1 w-[320px] mx-auto tablet:w-auto mt-[72px]">
              <h1 className="hero-header text-center">
                Welcome to{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-secondary-blue
                "
                >
                  Torus
                </span>
                ,
              </h1>
              <h1 className="hero-header text-center">
                {" "}
                the first LSD for TAO
              </h1>
              <p className="hero-subheader my-3 tablet:my-4 text-center">
                Earn passive income with a Liquid Staking Derivative on the
                Ethereum network
              </p>
            </div>
            <div className="flex flex-col tablet:flex-row tablet:space-x-20 space-y-10 tablet:space-y-0 items-center">
              <div className="flex flex-col group rounded bg-card-glass border border-glass-stroke p-4 max-w-[310px] transition-all hover:scale-110 space-y-2">
                <h2 className="header">Stake your TAO</h2>
                <p className="sub-text">Start earning rewards</p>
                <p className="text">
                  Choose TAO and stake it to start earning passive income
                </p>
                <ButtonPrimary text="Stake Now" />
              </div>
              <div className="flex flex-col group rounded bg-card-glass border border-glass-stroke p-4 max-w-[310px] transition-all hover:scale-110 space-y-2">
                <h2 className="header">Your TAO Rewards</h2>
                <p className="sub-text">Check your TAO Earnings</p>
                <p className="text">
                  View your TAO rewards in real-time and see your earnings grow
                </p>
                <ButtonPrimary text="Check Rewards" />
              </div>
            </div>
          </PaddedContainer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
