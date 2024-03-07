import React from "react";

const BeliefSection = () => {
  return (
    <section className="belief-section px-4">
      <div className="container-border-radius md:container-border-radius-desktop relative bg-center bg-cover bg-belief-section overflow-hidden p-4 py-16 lg:py-48 md:py-32 flex flex-col mx-auto text-center items-center container bg-yellow-100">
        <h2 className="mb-4 md:mb-8 font-black text-lime-800 text-3xl lg:text-5xl md:text-4xl">
          It’s Real Food.
        </h2>
        <p className="lg:w-4/5 text-slate-600 font-semibold text-xl md:text-2xl lg:text-3xl">
          Juzz! is more than just a beverage company - it's a movement towards
          healthier, happier living.
          <br />
          <br />
          We believe that every sip can be a step towards a brighter future.
        </p>
      </div>
    </section>
  );
};

export default BeliefSection;
