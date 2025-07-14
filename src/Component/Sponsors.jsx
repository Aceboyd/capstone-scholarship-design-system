import React from "react";

// Import sponsor logos from src/assets/image/
import cocaColaLogo from "../assets/image/coca-cola.png";
import cowrywiseLogo from "../assets/image/cowrywise.png";
import nestleLogo from "../assets/image/nestle.png";
import airtelLogo from "../assets/image/airtel.png";
import dangoteLogo from "../assets/image/dangote.png";
import flutterwaveLogo from "../assets/image/flutterwave.png";
import googleLogo from "../assets/image/google.png";
import mtnLogo from "../assets/image/mtn.png";
import privateLogo from "../assets/image/private.png";
import ubaGroupLogo from "../assets/image/UBA.png";
import mastercardLogo from "../assets/image/Mastercard.png";
import firstBankLogo from "../assets/image/First Bank of Nigeria.png";
import unicefLogo from "../assets/image/UNICEF.png";

const Sponsors = () => {
  // Array of sponsor logos with their respective alt texts
  const sponsorLogos = [
    { src: cocaColaLogo, alt: "Coca-Cola" },
    { src: cowrywiseLogo, alt: "Cowrywise" },
    { src: nestleLogo, alt: "Nestle" },
    { src: airtelLogo, alt: "Airtel" },
    { src: dangoteLogo, alt: "Dangote" },
    { src: flutterwaveLogo, alt: "Flutterwave" },
    { src: googleLogo, alt: "Google" },
    { src: mtnLogo, alt: "MTN" },
    { src: privateLogo, alt: "Private" },
    { src: ubaGroupLogo, alt: "UBA Group" },
    { src: mastercardLogo, alt: "Mastercard" },
    { src: firstBankLogo, alt: "First Bank of Nigeria" },
    { src: unicefLogo, alt: "UNICEF" },
  ];

  // Duplicate the logos to create a seamless loop for the marquee effect
  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-fadeIn">
          <span className="text-[#000000]">OUR </span>
          <span className="text-[#0000FE]">TRUSTED </span>
          <span className="text-[#000000]">SPONSORS</span>
        </h2>
        {/* Subheading */}
        <p className="text-base sm:text-lg text-[#0000FE] mb-6 sm:mb-8 animate-fadeIn animate-delay-100">
          Partnering with top organisations to fund your future
        </p>
        {/* Sponsor Logos with Marquee Effect */}
        <div className="overflow-hidden">
          <div className="flex flex-nowrap animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`} // Ensure unique keys for duplicated items
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-9 md:h-10 object-contain mx-2 sm:mx-3"
                onError={(e) => console.error(`Failed to load image: ${logo.src}`)}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;