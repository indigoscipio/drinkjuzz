import React from "react";

const BeliefSection = () => {
  return (
    <section className="belief-section px-4">
      <div className="relative bg-center bg-cover bg-belief-section overflow-hidden p-4 py-16 flex flex-col mx-auto text-center items-center container bg-yellow-100">
        <h2 className="mb-4 font-black text-lime-800 text-3xl md:text-5xl">
          It’s Real Food.
        </h2>
        <p className="text-slate-600 font-semibold text-xl">
          Juzz! is more than just a beverage company - it's a movement towards
          healthier, happier living. We believe that every sip can be a step
          towards a brighter future.
        </p>
      </div>
    </section>
  );
};

export default BeliefSection;
