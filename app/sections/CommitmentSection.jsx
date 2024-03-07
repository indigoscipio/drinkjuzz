import React from "react";

const CommitmentSection = () => {
  const commitments = [
    {
      image: "./assets/commitment-1.png",
      title: "Freshness",
      description:
        "We use only the freshest, locally sourced ingredients to ensure our products are bursting with flavor and vitality.",
    },
    {
      image: "./assets/commitment-2.png",
      title: "Quality",
      description:
        "We are committed to maintaining the highest standards of quality in every aspect of our products, from ingredients to packaging.",
    },
    {
      image: "./assets/commitment-3.png",
      title: "Sustainability",
      description:
        "We prioritize sustainability in our practices, striving to minimize our environmental impact and support local communities.",
    },
    {
      image: "./assets/commitment-4.png",
      title: "Community",
      description:
        "We believe in giving back to our community by supporting local initiatives and charities that align with our values.",
    },
  ];

  return (
    <section id="commitment-section" className="commitment-section m-4">
      <div className="p-4 py-12 md:py-16 lg:py-24 container-border-radius container mx-auto bg-yellow-400 text-lime-800">
        <h2 className="mb-8 lg:mb-24 text-center text-3xl md:text-4xl font-black">
          Our Commitment
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <img src={commitment.image} alt="" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
              <p className="text-slate-600">{commitment.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CommitmentSection;
