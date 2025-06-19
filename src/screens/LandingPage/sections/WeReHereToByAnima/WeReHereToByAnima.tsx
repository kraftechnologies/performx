import React from "react";
import { Check, Star } from "lucide-react";

export const WeReHereToByAnima = (): JSX.Element => {
  const benefits = [
    "Streamlined HR Management",
    "Customizable Workflows",
    "Seamless Team Integration",
    "Real time Analytics Dashboard",
  ];

  return (
    <section
      className="relative min-h-screen h-full w-full py-20 text-white font-jost flex items-center justify-center bg-[#0D0620] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/magicpattern-grid-pattern-1745224895225 1.jpg')",
      }}
      aria-label="Enhance Your Work with PerformX"
    >
      <div className="container max-w-6xl px-4 flex flex-col items-center text-center gap-6 relative z-10">

        <div className="relative space-y-4 sm:space-y-6 z-10">
          <div className="relative mb-24 sm:mb-28">
            <h1 className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              We’re here to <span className="text-[#8E24AA]">Enhance</span> Your <br />
              Work & <span className="relative z-10">Company</span>
            </h1>

            <img
              src="/company-arrow.png"
              alt="Arrow pointing to Company"
              className="absolute w-[200px] sm:w-[240px] top-[20%] left-[50%] sm:left-[63%] z-0 pointer-events-none"
            />
          </div>

          <p className="font-medium text-base sm:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Let’s make your work more organized and easier using the{" "}
            <span className="text-[#8E24AA] font-semibold">PerformX</span> Dashboard with
            many of the latest features in managing work everyday.
          </p>
        </div>

        {/* Benefits Buttons */}
        <div className="relative mt-6 w-full max-w-4xl z-10 flex flex-wrap justify-center gap-4">
          {benefits.map((text, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-6 py-2 text-sm sm:text-base font-medium rounded-full border border-white text-white bg-transparent cursor-pointer transition-all duration-200 hover:bg-[#8E24AA] hover:text-white"
              style={{ minWidth: "260px", justifyContent: "center" }}
            >
              <Check className="w-4 h-4 text-[#FFA500]" />
              {text}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-6 z-10">
          <div className="flex items-center gap-2 text-white text-sm sm:text-base">
            <span className="flex items-center gap-1 text-[#FFC000] font-medium">
              <Star className="w-4 h-4 fill-[#FFC000]" />
              4.8
            </span>
            <span className="font-medium">10,000+ PerformX Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};
