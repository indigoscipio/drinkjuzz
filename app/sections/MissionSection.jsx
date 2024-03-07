import React from "react";
import Link from "next/link";

const MissionSection = () => {
  return (
    <section className="mission-section p-4">
      <div className="flex flex-col md:flex-row md:items-center container-border-radius container p-4 py-16 mx-auto bg-lime-800 text-white">
        <div className="basis-1/2">
          <img className="rounded-3xl" src="./assets/juice-1.jpg" alt="" />
        </div>

        <div className="basis-1/2 mb-8 md:px-8 lg:px-16  md:py-0 p0 py-8">
          <h2 className="font-semibold lg:text-3xl text-2xl mb-8">
            Our mission is to inspire individuals to prioritize their well-being
            by offering delicious and nutritious options that make healthy
            choices easy and enjoyable.
          </h2>
          <button className="btn-primary-orange">
            <Link href="#commitment-section">Our Commitment</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
