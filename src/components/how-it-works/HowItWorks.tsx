"use client";
import { useState } from "react";
import WidthLimitContainer from "../ui/containers/WidthLimitContainer";
import { LuDonut } from "react-icons/lu";
import PaddedContainer from "../ui/containers/PaddedContainer";

const HowItWorks = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <WidthLimitContainer>
      <div className="flex flex-col">
        <h2 className="text-center">How it works</h2>
        <PaddedContainer>
          <div className="grid grid-cols-4">
            <div
              className="flex flex-col justify-between"
              onClick={() => setSelectedItem(1)}
            >
              <div className="flex justify-center relative">
                <div
                  className={`w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 1 ? "bg-theme-blue" : "bg-theme-white"}
                ${
                  selectedItem === 1 ? "border-theme-blue" : "border-theme-gray"
                }
                `}
                >
                  {selectedItem === 1 ? (
                    <LuDonut className="w-full h-full text-white" />
                  ) : (
                    <p>01</p>
                  )}
                </div>
                <div
                  className={`w-1/2 left-1/2 h-[3px]  absolute -z-10 top-1/2
                ${selectedItem === 1 ? "bg-theme-blue" : "bg-theme-gray"}
                `}
                />
              </div>
              <div
                className={`border rounded-lg h-full mx-4 ${
                  selectedItem === 1 ? "bg-theme-blue" : "bg-white"
                }`}
              >
                <div className="flex flex-col justify-between">
                  <p>STEP 1</p>
                  <h3>Stake TAO Tokens</h3>
                </div>
                <p>Stake your TAO tokens as the first step</p>
              </div>
            </div>

            <div
              className="flex flex-col justify-between"
              onClick={() => setSelectedItem(2)}
            >
              <div className="flex justify-center relative">
                <div
                  className={`w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 2 ? "bg-theme-blue" : "bg-theme-white"}
                ${
                  selectedItem === 2 ? "border-theme-blue" : "border-theme-gray"
                }
                `}
                >
                  {selectedItem === 2 ? (
                    <LuDonut className="w-full h-full text-white" />
                  ) : (
                    <p>02</p>
                  )}
                </div>
                <div
                  className={`w-full h-[3px]  absolute -z-10 top-1/2
                ${selectedItem === 2 ? "bg-theme-blue" : "bg-theme-gray"}
                `}
                />
              </div>
              <div
                className={`border rounded-lg h-full mx-4 ${
                  selectedItem === 2 ? "bg-theme-blue" : "bg-white"
                }`}
              >
                <div className="flex flex-col justify-between">
                  <p>STEP 2</p>
                  <h3>TAO Delegated to Validator</h3>
                </div>
                <p>Your TAO is delegated to a validator for staking</p>
              </div>
            </div>

            <div
              className="flex flex-col justify-between"
              onClick={() => setSelectedItem(3)}
            >
              <div className="flex justify-center relative">
                <div
                  className={`w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 3 ? "bg-theme-blue" : "bg-theme-white"}
                ${
                  selectedItem === 3 ? "border-theme-blue" : "border-theme-gray"
                }
                `}
                >
                  {selectedItem === 3 ? (
                    <LuDonut className="w-full h-full text-white" />
                  ) : (
                    <p>03</p>
                  )}
                </div>
                <div
                  className={`w-full h-[3px]  absolute -z-10 top-1/2
                ${selectedItem === 3 ? "bg-theme-blue" : "bg-theme-gray"}
                `}
                />
              </div>
              <div
                className={`border rounded-lg h-full mx-4 ${
                  selectedItem === 3 ? "bg-theme-blue" : "bg-white"
                }`}
              >
                <div className="flex flex-col justify-between">
                  <p>STEP 3</p>
                  <h3>sTAO Minted</h3>
                </div>
                <p>sTAO tokens are minted in return of your staked TAO</p>
              </div>
            </div>

            <div
              className="flex flex-col justify-between"
              onClick={() => setSelectedItem(4)}
            >
              <div className="flex justify-center relative">
                <div
                  className={`w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 4 ? "bg-theme-blue" : "bg-theme-white"}
                ${
                  selectedItem === 4 ? "border-theme-blue" : "border-theme-gray"
                }`}
                >
                  {selectedItem === 4 ? (
                    <LuDonut className="w-full h-full text-white" />
                  ) : (
                    <p>04</p>
                  )}
                </div>
                <div
                  className={`w-1/2 right-1/2 h-[3px]  absolute -z-10 top-1/2
                ${selectedItem === 4 ? "bg-theme-blue" : "bg-theme-gray"}
                `}
                />
              </div>
              <div
                className={`border rounded-lg h-full mx-4 ${
                  selectedItem === 4 ? "bg-theme-blue" : "bg-white"
                }
                `}
              >
                <div className="flex flex-col justify-between">
                  <p>STEP 4</p>
                  <h3>Automatically Accrue Rewards</h3>
                </div>
                <p>You automatically accrue rewards over time</p>
              </div>
            </div>
          </div>
        </PaddedContainer>
      </div>
    </WidthLimitContainer>
  );
};

export default HowItWorks;
