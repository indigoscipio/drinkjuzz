import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section-footer m-4">
      <div className="bg-footer-section bg-no-repeat bg-contain bg-right container-border-radius py-16 container mx-auto bg-lime-800 p-4 text-white">
        <div className="md:items-center flex flex-col md:flex-row">
          <div className="lg:pr-32 md:pr-16 basis-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8 mb-16">
            <Image width={128} height={48} src="./assets/logo.svg" alt="" />
            <p className="text-lg md:text-xl lg:text-2xl">
              Healthy beverages & fruit delights made with love, nature's
              bounty, and a passion for wellness.
            </p>
            <ul className="flex gap-4">
              <li>
                <Image
                  width={24}
                  height={24}
                  src="./assets/socials-instagram.svg"
                />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src="./assets/socials-twitter.svg"
                />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src="./assets/socials-facebook.svg"
                />
              </li>
            </ul>
          </div>

          <div className="basis-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8 items-start">
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl">
              drinkjuzz@gmail.com
            </h2>
            <button className="btn-primary-white">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/r8hn8d4x5PbxegMj8"
              >
                Get Directions
              </Link>
            </button>
            <div>
              <h3 className="text-lg md:text-xl font-bold">Opening Hours</h3>
              <p className="text-lg md:text-xl">
                Mon - Sat: 8AM - 7PM <br /> Sun: 9AM - 7PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
