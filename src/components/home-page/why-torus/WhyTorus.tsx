import Scene from "../../Scene";
import PaddedContainer from "../../ui/containers/PaddedContainer";
import { CiBitcoin } from "react-icons/ci";

const WhyTorus = () => {
  return (
    <div className="relative">
      <div className="hidden tablet:block absolute inset-0 z-0 w-full h-full">
        <Scene />
      </div>

      <div className="bg-gradient-to-b from-theme-blue to-theme-secondary-blue z-10 pb-20">
        <PaddedContainer>
          <div className="flex flex-col tablet:flex-row justify-center">
            <div className="flex flex-col tablet:flex-row z-10 tablet:space-x-10">
              <div className="tablet:mt-10 space-y-8 tablet:w-1/2">
                <h2 className="section-header text-card-white mt-10">
                  Why Torus?
                </h2>
                <p className="section-subheader text-card-white ">
                  Lorumx ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eget bibendum ex. Sed vitae urna vel nunc tincidunt
                  aliquam. Lorumx ipsum dolor sit amet, consectetur adipiscing
                  elit. Mauris eget bibendum ex. Sed vitae urna vel nunc
                  tincidunt aliquam.Lorumx ipsum dolor sit amet, consectetur
                  adipiscing elit. Mauris eget bibendum ex. Sed vitae urna vel
                  nunc tincidunt aliquam. Lorumx ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris eget bibendum ex. Sed
                  vitae urna vel nunc tincidunt aliquam.
                </p>
              </div>
              <div className="grid grid-cols-1 pc:grid-cols-2 bg-card-white shadow-2xl rounded-2xl p-8 gap-16 mt-20">
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Staking Mastery</h4>
                  <p className="text">
                    Earn superior staking APR from Bittensor network on Ethereum{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Validate Nodes</h4>
                  <p className="text">
                    Decentralizes Bittensor network by validation rights{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Ethereum Utility</h4>
                  <p className="text">
                    Enables use of TAO for DeFi on Ethereum{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Dynamic Markets</h4>
                  <p className="text">
                    Creates liquid TAO markets on Ethereum{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <CiBitcoin className="w-8 h-8 text-theme-blue" />
                  <h4 className="header">Validator Control</h4>
                  <p className="text">
                    Enables governance for Validator and weight setting on
                    Bittensor network{" "}
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
