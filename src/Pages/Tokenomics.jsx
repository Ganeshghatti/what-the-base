import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Tokenomics() {
  const [msg, setmsg] = useState("copy");

  const handleCopyToClipboard = () => {
    const textToCopy = "947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setmsg("Address copied to clipboard");
      setTimeout(() => {
        setmsg("copy");
      }, 3000);
    });
  };

  return (
    <section
      id="Tokenomics"
      className="w-full h-auto flex flex-col items-center gap-4 relative"
    >
      <img src="/assets/herodesign.png" alt="" className="tokenomics-design" />

      <div className="flex flex-col custom-width-88 md:w-11/12">
        <div className="flex justify-between items-center w-full gap-12 md:gap-6">
          <p className="tokenomics-title">TOKENOMICS</p>
          <div className="flex-1 h-2 bg-black md:h-1" />
        </div>
        <div className="w-full flex md:flex-col md:gap-12">
          <div className="tokenomics-left">
            <p className="tokenomics-description w-11/12 md:w-full">
              What the Fuck is Tokenomics!?
            </p>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Contract renounced
              </li>{" "}
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Buy/Sell Tax 0%
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Liquidity Burnt
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Total Supply 1,000,000,000 $WTS
              </li>
            </ul>
            <Tooltip title={msg}>
              <button
                className="tokenomics-button"
                onClick={handleCopyToClipboard}
              >
                Contract Address
              </button>
            </Tooltip>
          </div>
          <div className="tokenomics-right">
            <div className="flex justify-center gap-20 w-full md:justify-between md:gap-0">
              <div className="flex items-center gap-2 md:gap-1 tokenomics-right-piechart-text">
                <div className="w-4 h-4 bg-[#2FA6FD]" />
                Team
              </div>{" "}
              <div className="flex items-center gap-2 md:gap-1 tokenomics-right-piechart-text">
                <div className="w-4 h-4 bg-[#A25EC2]" />
                Marketing
              </div>{" "}
              <div className="flex items-center gap-2 md:gap-1 tokenomics-right-piechart-text">
                <div className="w-4 h-4 bg-[#03F6FF]" />
                Liquidity
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <img src="/assets/tokenomicsimg.png" alt="" className="w-2/3 md:w-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
