import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="px-4 py-12 md:px-0 container mx-auto">
        <div className="hero-section__text flex flex-col">
          <h1 className="font-black text-4xl text-lime-800 mb-4">
            Juzz! Up Your Day with Fresh, Delicious Delights
          </h1>
          <p className="font-regular text-slate-600 mb-4">
            Healthy beverages & fruit delights made with love, nature's bounty,
            and a passion for wellness.
          </p>
          <div className="flex gap-2">
            <button className="btn-primary-orange">Order Now</button>
            <button className="btn-primary-orange">Check Our Location</button>
          </div>
        </div>
        <div className="hero-section__image">
          <Image
            width={1108}
            height={828}
            className=""
            src="/assets/hero-image.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
