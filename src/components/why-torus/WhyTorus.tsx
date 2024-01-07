import Scene from "../Scene";
import PaddedContainer from "../ui/containers/PaddedContainer";
import { CiBitcoin } from "react-icons/ci";

const WhyTorus = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Scene />
      </div>

      <div className="bg-gradient-to-b from-theme-blue to-theme-secondary-blue z-10 min-h-screen">
        <PaddedContainer>
          <div className="flex flex-col tablet:flex-row">
            <div className="flex flex-col tablet:flex-row z-10">
              <div className="tablet:mt-40 space-y-8">
                <h2 className="section-header text-card-white">Why Torus?</h2>
                <p className="section-subheader text-card-white">
                  Lorem ipsum dolor sit amet consectetur. Sit cum lorem
                  vulputate nunc.
                </p>
              </div>
              <div className="grid grid-cols-1 pc:grid-cols-2 bg-card-white rounded-xl p-8 gap-16 mt-20">
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Staking Mastery</h4>
                  <p className="text">
                    Earn superior staking APR from Bittensor network on Ethereum{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Staking Mastery</h4>
                  <p className="text">
                    Earn superior staking APR from Bittensor network on Ethereum{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Staking Mastery</h4>
                  <p className="text">
                    Earn superior staking APR from Bittensor network on Ethereum{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Staking Mastery</h4>
                  <p className="text">
                    Earn superior staking APR from Bittensor network on Ethereum{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Staking Mastery</h4>
                  <p className="text">
                    Earn superior staking APR from Bittensor network on Ethereum{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PaddedContainer>
      </div>
    </div>
  );
};

export default WhyTorus;
