import React from "react";

export default function HowToBuy() {
  return (
    <section id="HowToBuy" className="flex flex-col items-center">
      <div className="custom-width-88 md:w-11/12 flex flex-col gap-6">
        <div className="flex justify-between items-center w-full gap-12 md:gap-6">
          <p className="HowToBuy-title">HOW TO BUY</p>
          <div className="flex-1 h-2 bg-black md:h-1" />
        </div>
        <div className="w-full flex md:flex-col md:items-center justify-between mt-24 md:gap-28">
          <div className="HowToBuy-card1 HowToBuy-card">
            <img src="/assets/HowtoBuycard1.png" alt="" />
            <a href="https://app.uniswap.org">
              Open https:
              <br />
              //app.uniswap
              <br />
              .org/
            </a>
          </div>
          <div className="HowToBuy-card2 HowToBuy-card">
            {" "}
            <img src="/assets/HowtoBuycard2.png" alt="" />
            Connect your EVM wallet
          </div>
          <div className="HowToBuy-card3 HowToBuy-card">
            {" "}
            <img src="/assets/HowtoBuycard3.png" alt="" />
            Click the Swap button
          </div>
        </div>
      </div>
    </section>
  );
}
