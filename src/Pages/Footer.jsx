import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useLocation } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

export default function Footer() {
  const [scale, setscale] = useState({ scale: 1 });

  const scalehandleClick = () => {
    setscale((prevState) => ({
      scale: 0.9,
    }));
  };
  return (
    <footer
      id="footer"
      className="flex flex-col justify-center items-center w-full py-12 md:mt-0 mt-16"
    >
      <div className="flex flex-col gap-3 custom-width-88 md:w-full footer-div">
        <div className="flex w-full footer-div1">
          <div className="w-full flex items-center justify-end footer-div1-div">
            <img
              src="/assets/footerbg.png"
              alt=""
              className="footer-div1-div-img"
            />
            <div className="footer-div1-gradient">
              <img
                src="/assets/footergradient.png"
                alt=""
                className="object-cover w-full md:hidden"
              />{" "}
              <img
                src="/assets/footergradientphone.png"
                alt=""
                className="object-cover w-full hidden md:block"
              />
              <div className="flex items-center justify-center absolute sm:gap-0 lg:gap-2 flex-col">
                <p className="footer-div1-gradient-text">WHAT THE SOL!!</p>
                <a
                  href="https://raydium.io/swap"
                  target="_blank"
                  className="w-fit"
                  onClick={scalehandleClick}
                >
                  <button
                    className="footer-div1-gradient-button"
                    style={{
                      transform: `scale(${scale.scale})`,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-div2 flex justify-between md:flex-col-reverse md:gap-8 md:items-center md:justify-center md:mt-6">
          <p className="footer-div2-copyright md:w-full md:text-center">
            Copyright ©2024 WTS. All rights reserved.
          </p>
          <div className="flex gap-8 md:gap-0 md:justify-between items-center md:w-full">
            <ul className="flex items-center gap-8 md:gap-2 md:justify-between">
              <li>
                <a href="/#Tokenomics">Tokenomics</a>
              </li>
              <li>
                <a href="/#HowToBuy">How to buy</a>
              </li>
            </ul>
            <a href="https://twitter.com/what_the_SB">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_163_702)">
                  <path
                    d="M11.8656 8.46875L19.1509 0H17.4244L11.0988 7.35313L6.04625 0H0.21875L7.85906 11.1194L0.21875 20H1.94531L8.62563 12.2348L13.9613 20H19.7888L11.8652 8.46875H11.8656ZM9.50094 11.2172L8.72672 10.11L2.56734 1.29969H5.21922L10.1897 8.41L10.9637 9.51719L17.4252 18.7594H14.7736L9.50094 11.2177V11.2172Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_163_702">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
            </a>
            <a href="https://t.me/whathesolbase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.0841 2.59712C21.9936 2.519 21.8836 2.46706 21.7658 2.4469C21.648 2.42674 21.5269 2.43914 21.4156 2.48275L2.41627 9.91806C2.18518 10.0085 1.98966 10.1714 1.85908 10.3825C1.7285 10.5935 1.6699 10.8412 1.69209 11.0883C1.71428 11.3355 1.81606 11.5688 1.98214 11.7532C2.14823 11.9375 2.36964 12.0631 2.61315 12.1109L7.6869 13.1074V18.7502C7.687 19.0118 7.76528 19.2674 7.91168 19.4842C8.05808 19.701 8.26593 19.8691 8.50855 19.967C8.75117 20.0648 9.01749 20.0879 9.27333 20.0333C9.52917 19.9787 9.76285 19.8489 9.9444 19.6606L12.4419 17.0702L16.34 20.4874C16.578 20.698 16.8847 20.8144 17.2025 20.8146C17.3413 20.8143 17.4792 20.7925 17.6113 20.7499C17.8278 20.6814 18.0226 20.5573 18.1763 20.39C18.3299 20.2227 18.437 20.0181 18.4869 19.7965L22.295 3.24118C22.3218 3.1248 22.3163 3.00331 22.2791 2.88982C22.242 2.77632 22.1745 2.67512 22.0841 2.59712ZM2.81658 11.0037C2.81299 10.994 2.81299 10.9834 2.81658 10.9737C2.82082 10.9704 2.82557 10.9679 2.83065 10.9662L17.8035 5.10493L8.11909 12.0424L2.83065 11.0074L2.81658 11.0037ZM9.1344 18.8787C9.10856 18.9055 9.07532 18.924 9.03892 18.9319C9.00252 18.9397 8.96461 18.9365 8.93002 18.9228C8.89542 18.909 8.86571 18.8852 8.84468 18.8545C8.82364 18.8238 8.81223 18.7875 8.8119 18.7502V13.8856L11.5953 16.3231L9.1344 18.8787ZM17.391 19.5424C17.384 19.5741 17.3687 19.6034 17.3466 19.6271C17.3245 19.6509 17.2965 19.6683 17.2653 19.6774C17.2336 19.6886 17.1994 19.691 17.1664 19.6844C17.1335 19.6778 17.1029 19.6624 17.0778 19.6399L9.15315 12.6884L20.9056 4.26587L17.391 19.5424Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
}
