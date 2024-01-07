"use client";
import { useEffect, useState } from "react";
import WidthLimitContainer from "../ui/containers/WidthLimitContainer";
import PaddedContainer from "../ui/containers/PaddedContainer";
import { BsSafe } from "react-icons/bs";
import { BsPiggyBank } from "react-icons/bs";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { SlPresent } from "react-icons/sl";

const HowItWorks = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((prevState) => (prevState % 4) + 1);
    }, 3 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <WidthLimitContainer>
      <div className="flex flex-row pc:flex-col">
        <PaddedContainer>
          <h2 className="text-left pc:text-center section-header transition-all duration-500 mb-6 pc:mb-0">
            How it works
          </h2>
        </PaddedContainer>
        <PaddedContainer>
          <div className="grid grid-cols-1 pc:gap-y-10 pc:grid-cols-4">
            <div
              className="flex flex-row pc:flex-col pc:justify-between"
              onClick={() => setSelectedItem(1)}
            >
              <div className="flex justify-center relative pc:my-10 h-full pc:h-auto items-center">
                <div
                  className={`transition-all duration-500 w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 1 ? "bg-theme-blue" : "bg-white"}
                ${selectedItem === 1 ? "border-theme-blue" : "border-line-gray"}
                `}
                >
                  {selectedItem === 1 ? (
                    <BsSafe className="w-full h-full text-white p-2" />
                  ) : (
                    <p className="numbers">01</p>
                  )}
                </div>
                <div
                  className={`w-1/2 left-1/2 h-[3px] hidden pc:block  transition-all duration-500 absolute -z-10 top-1/2
                ${selectedItem === 1 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
                <div
                  className={`w-[3px] h-1/2 pc:hidden  transition-all duration-500 absolute -z-10 bottom-0
                ${selectedItem === 1 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
              </div>
              <div
                className={`transition-all duration-500 border rounded-lg h-full mx-4 p-4 space-y-4 w-full pc:w-fit ${
                  selectedItem === 1 ? "bg-theme-blue" : "bg-white"
                }
                ${selectedItem === 1 ? "shadow-xl" : "shadow-2xl"}
                `}
              >
                <div className="flex flex-col justify-between">
                  <p className="body text-line-gray">STEP 1</p>
                  <h3
                    className={`header transition-all duration-500 ${
                      selectedItem === 1 ? "text-card-white" : ""
                    }`}
                  >
                    Stake TAO Tokens
                  </h3>
                </div>
                <p
                  className={`text transition-all duration-500 ${
                    selectedItem == 1 ? "text-bg-text-white" : ""
                  }`}
                >
                  Stake your TAO tokens as the first step
                </p>
              </div>
            </div>

            <div
              className="flex flex-row pc:flex-col pc:justify-between"
              onClick={() => setSelectedItem(2)}
            >
              <div className="flex justify-center relative pc:my-10 h-full pc:h-auto items-center">
                <div
                  className={`transition-all duration-500 w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 2 ? "bg-theme-blue" : "bg-white"}
                ${selectedItem === 2 ? "border-theme-blue" : "border-line-gray"}
                `}
                >
                  {selectedItem === 2 ? (
                    <BsPiggyBank className="w-full h-full text-white p-2" />
                  ) : (
                    <p className="numbers">02</p>
                  )}
                </div>
                <div
                  className={`w-full h-[3px] hidden pc:block  transition-all duration-500 absolute -z-10 top-1/2
                ${selectedItem === 2 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
                <div
                  className={`w-[3px] h-full pc:hidden  transition-all duration-500 absolute -z-10
                ${selectedItem === 2 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
              </div>
              <div
                className={`transition-all duration-500 border rounded-lg h-full mx-4 p-4 space-y-4 w-full pc:w-fit ${
                  selectedItem === 2 ? "bg-theme-blue" : "bg-white"
                }
                ${selectedItem === 2 ? "shadow-xl" : "shadow-2xl"}
                `}
              >
                <div className="flex flex-col justify-between">
                  <p className="body text-line-gray">STEP 2</p>
                  <h3
                    className={`header transition-all duration-500 ${
                      selectedItem === 2 ? "text-card-white" : ""
                    }`}
                  >
                    TAO Delegated to Validator
                  </h3>
                </div>
                <p
                  className={`text transition-all duration-500 ${
                    selectedItem == 2 ? "text-bg-text-white" : ""
                  }`}
                >
                  Your TAO is delegated to a validator for staking
                </p>
              </div>
            </div>

            <div
              className="flex flex-row pc:flex-col pc:justify-between"
              onClick={() => setSelectedItem(3)}
            >
              <div className="flex justify-center relative pc:my-10 h-full pc:h-auto items-center">
                <div
                  className={`transition-all duration-500 w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 3 ? "bg-theme-blue" : "bg-white"}
                ${selectedItem === 3 ? "border-theme-blue" : "border-line-gray"}
                `}
                >
                  {selectedItem === 3 ? (
                    <MdOutlineGeneratingTokens className="w-full h-full text-white p-2" />
                  ) : (
                    <p className="numbers">03</p>
                  )}
                </div>
                <div
                  className={`w-full h-[3px] hidden pc:block  transition-all duration-500 absolute -z-10 top-1/2
                ${selectedItem === 3 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
                <div
                  className={`w-[3px] h-full pc:hidden  transition-all duration-500 absolute -z-10
                ${selectedItem === 3 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
              </div>
              <div
                className={`transition-all duration-500 border rounded-lg h-full mx-4 p-4 space-y-4 w-full pc:w-fit ${
                  selectedItem === 3 ? "bg-theme-blue" : "bg-white"
                }
                ${selectedItem === 3 ? "shadow-xl" : "shadow-2xl"}
                `}
              >
                <div className="flex flex-col justify-between">
                  <p className="body text-line-gray">STEP 3</p>
                  <h3
                    className={`header transition-all duration-500 ${
                      selectedItem === 3 ? "text-card-white" : ""
                    }`}
                  >
                    sTAO Minted
                  </h3>
                </div>
                <p
                  className={`text transition-all duration-500 ${
                    selectedItem == 3 ? "text-bg-text-white" : ""
                  }`}
                >
                  sTAO tokens are minted in return of your staked TAO
                </p>
              </div>
            </div>

            <div
              className="flex flex-row pc:flex-col pc:justify-between"
              onClick={() => setSelectedItem(4)}
            >
              <div className="flex justify-center relative pc:my-10 h-full pc:h-auto items-center">
                <div
                  className={`transition-all duration-500 w-14 h-14 border-4 rounded-full flex justify-center items-center
                  ${selectedItem === 4 ? "bg-theme-blue" : "bg-white"}
                ${
                  selectedItem === 4 ? "border-theme-blue" : "border-line-gray"
                }`}
                >
                  {selectedItem === 4 ? (
                    <SlPresent className="w-full h-full text-white p-2" />
                  ) : (
                    <p className="numbers">04</p>
                  )}
                </div>
                <div
                  className={`w-1/2 right-1/2 h-[3px] hidden pc:block  transition-all duration-500 absolute -z-10 top-1/2
                ${selectedItem === 4 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
                <div
                  className={`w-[3px] h-1/2 pc:hidden  transition-all duration-500 absolute -z-10 top-0
                ${selectedItem === 4 ? "bg-theme-blue" : "bg-line-gray"}
                `}
                />
              </div>
              <div
                className={`transition-all duration-500 border rounded-lg h-full mx-4 p-4 space-y-4 w-full pc:w-fit ${
                  selectedItem === 4 ? "bg-theme-blue" : "bg-white"
                }
                ${selectedItem === 4 ? "shadow-xl" : "shadow-2xl"}
                `}
              >
                <div className="flex flex-col justify-between">
                  <p className="body text-line-gray">STEP 4</p>
                  <h3
                    className={`header transition-all duration-500 ${
                      selectedItem === 4 ? "text-card-white" : ""
                    }`}
                  >
                    Automatically Accrue Rewards
                  </h3>
                </div>
                <p
                  className={`text transition-all duration-500 ${
                    selectedItem == 4 ? "text-bg-text-white" : ""
                  }`}
                >
                  You automatically accrue rewards over time
                </p>
              </div>
            </div>
          </div>
        </PaddedContainer>
      </div>
    </WidthLimitContainer>
  );
};

export default HowItWorks;
