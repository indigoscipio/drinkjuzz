import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="px-4 py-12 md:py-16 md:px-0 container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="basis-1/2 md:pr-16 lg:pr-24 xl:pr-48 hero-section__text flex flex-col gap-8">
            <h1 className="font-black text-4xl md:text-5xl text-lime-800">
              Juzz! Up Your Day with Fresh, Delicious Delights
            </h1>
            <p className="font-regular md: text-xl text-slate-600">
              Healthy beverages & fruit delights made with love, nature's
              bounty, and a passion for wellness.
            </p>
            <div className="flex gap-2">
              <button className="btn-primary-orange">
                <Link
                  target="_blank"
                  href="https://gofood.co.id/id/tasikmalaya/restaurant/toko-kue-48-bffa215b-d88e-4f96-9bb1-a1e8a25501cf"
                >
                  Order Via GoFood
                </Link>
              </button>
              <button className="btn-primary-orange">
                <Link
                  target="_blank"
                  href="https://food.grab.com/id/id/restaurant/toko-kue-48-empangsari-delivery/6-C6EZEULVTKEBEX?"
                >
                  Order Via GrabFood
                </Link>
              </button>
            </div>
          </div>
          <div className="hero-section__image basis-1/2">
            <Image
              width={1496}
              height={1496}
              className=""
              src="/assets/hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
