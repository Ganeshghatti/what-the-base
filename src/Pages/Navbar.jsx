import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const [scale, setscale] = useState({ scale: 1 });

  const scalehandleClick = () => {
    setscale((prevState) => ({
      scale: 0.9,
    }));
  };
  const menuf = () => {
    setmenu(!menu);
  };

  return (
    <nav
      id="navbar"
      className="absolute top-3 left-0 w-screen flex justify-between lg:justify-between md:justify-between items-center py-6 lg:px-8 z-50 md:px-6 pl-36 pr-24"
    >
      {menu && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 z-30"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.353)" }}
            onClick={menuf}
          />
          <ul className="flex flex-col fixed z-50 justify-center gap-12 left-0 top-0 items-center navbar-phone-sidemenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`z-50 absolute cursor-pointer  top-8 text-white right-7 ${
                menu ? "block" : "hidden"
              }`}
              onClick={menuf}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.851 7.00118C18.9366 6.91983 19.0044 6.82324 19.0507 6.71692C19.0971 6.6106 19.1209 6.49664 19.121 6.38153C19.1211 6.26642 19.0974 6.15242 19.0512 6.04605C19.005 5.93967 18.9373 5.843 18.8518 5.76156C18.7664 5.68011 18.665 5.61549 18.5534 5.57137C18.4417 5.52726 18.3221 5.50452 18.2012 5.50445C18.0803 5.50437 17.9606 5.52698 17.849 5.57096C17.7373 5.61495 17.6358 5.67945 17.5502 5.7608L11.9998 11.0469L6.45104 5.7608C6.27833 5.59631 6.04409 5.50391 5.79984 5.50391C5.55559 5.50391 5.32135 5.59631 5.14864 5.7608C4.97593 5.92528 4.87891 6.14837 4.87891 6.38099C4.87891 6.6136 4.97593 6.83669 5.14864 7.00118L10.699 12.2857L5.14864 17.5703C5.06313 17.6518 4.99529 17.7485 4.94901 17.8549C4.90273 17.9613 4.87891 18.0753 4.87891 18.1905C4.87891 18.3057 4.90273 18.4197 4.94901 18.5262C4.99529 18.6326 5.06313 18.7293 5.14864 18.8107C5.32135 18.9752 5.55559 19.0676 5.79984 19.0676C5.92078 19.0676 6.04054 19.0449 6.15227 19.0008C6.264 18.9568 6.36553 18.8921 6.45104 18.8107L11.9998 13.5246L17.5502 18.8107C17.723 18.975 17.9571 19.0672 18.2012 19.0671C18.4453 19.0669 18.6793 18.9744 18.8518 18.8099C19.0243 18.6455 19.1212 18.4224 19.121 18.19C19.1209 17.9575 19.0237 17.7346 18.851 17.5703L13.3006 12.2857L18.851 7.00118Z"
                fill="black"
              />
            </svg>
            <li>
              <a href="/#Tokenomics" onClick={menuf}>
                Tokenomics
              </a>
            </li>
            <li>
              <a href="/#HowToBuy" onClick={menuf}>
                How to buy
              </a>
            </li>
            <div className="flex gap-12 items-center flex-col">
              <div className="flex gap-6">
                <a href="https://twitter.com/whatthesolbase">
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
                  </svg>
                </a>
                <a href="https://t.me/whatthesolbase">
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
                  </svg>{" "}
                </a>
              </div>
            </div>
          </ul>
        </>
      )}
      {/* <img src="./assets/logo.png" className="navbar-logo cursor-pointer" /> */}
      <p className="navbar-logo">$WTB</p>
      <div className="flex gap-8 items-center md:hidden">
        <ul
          className="flex z-50 justify-around items-center md:hidden navbar-pc-menu mx-12"
          style={{ gap: "5vw" }}
        >
          <li>
            <a href="/#Tokenomics">Tokenomics</a>
          </li>
          <li>
            <a href="/#HowToBuy">How to buy</a>
          </li>
        </ul>
        <a href="https://twitter.com/whatthesolbase">
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
        <a href="https://t.me/whatthesolbase">
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
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="18"
        viewBox="0 0 32 18"
        fill="none"
        onClick={menuf}
        className={`hidden cursor-pointer md:block ${
          !menu ? "block" : "hidden"
        }`}
      >
        <line
          x1="1"
          y1="1"
          x2="31"
          y2="1"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="9"
          x2="18"
          y2="9"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="17"
          x2="31"
          y2="17"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </nav>
  );
}
