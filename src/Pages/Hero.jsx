import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const [scale, setscale] = useState({ scale: 1 });

  useEffect(() => {
    gsap.fromTo(
      ".hero-div-gradient",
      { scale: 0 },
      { scale: 1, duration: 0.25, delay: 1 }
    );
    gsap.fromTo(
      ".hero-div-content",
      { scale: 0 },
      { scale: 1, duration: 0.25, delay: 2 }
    );
  }, []);

  const scalehandleClick = () => {
    setscale((prevState) => ({
      scale: 0.9,
    }));
  };

  return (
    <section
      id="hero"
      className="w-full relative flex items-center md:flex-col"
    >
      <div className="hero-bg-div w-full h-screen absolute left-0 md:hidden top-0" />
      <div className="hero-div">
        <div className="hero-div-gradient">
          <img
            src="/assets/herogradient.png"
            alt=""
            className="hero-div-gradient-img"
          />
          <p className="hero-div-gradient-text">
            WHAT
            <br /> THE BASE!!
          </p>
        </div>
        <img src="/assets/heroimg.png" alt="" className="hero-img-phone" />
        <div className="hero-div-content flex flex-col gap-4">
          <div className="flex flex-col gap-2 hero-div-text">
            <p>What the Fxck!?</p>
            <p> Oh no, What the BASE!</p>
            <p>What the fuck is happening on BASE?</p>
          </div>
          <a
            href="https://app.uniswap.org/"
            target="_blank"
            className="w-fit"
            onClick={scalehandleClick}
          >
            <button
              className="hero-button"
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
    </section>
  );
}
