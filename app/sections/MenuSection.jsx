import React from "react";

const MenuSection = () => {
  const juices = [
    { name: "Strawberry Smoothie", price: "IDR 5,000" },
    { name: "Apple Juice", price: "IDR 7,000" },
    { name: "Orange Juice", price: "IDR 6,000" },
    { name: "Watermelon Juice", price: "IDR 8,000" },
    { name: "Pineapple Juice", price: "IDR 6,500" },
    { name: "Grape Juice", price: "IDR 7,500" },
    { name: "Mango Smoothie", price: "IDR 6,800" },
    { name: "Banana Shake", price: "IDR 6,200" },
    { name: "Blueberry Juice", price: "IDR 7,200" },
    { name: "Kiwi Juice", price: "IDR 6,300" },
    { name: "Cranberry Juice", price: "IDR 7,800" },
    { name: "Peach Smoothie", price: "IDR 6,700" },
  ];

  return (
    <section id="menu-section" className="menu-section mx-4">
      <div className="container mx-auto py-16 md:py-24 lg:py-32">
        <h2 className="text-center font-black md:text-4xl lg:text-5xl text-lime-800 text-3xl md:mb-8 mb-4">
          Our Product Lineups
        </h2>
        <div className="menu__juice-container">
          <h3 className="mb-4 md:mb-12 text-center md:text-4xl text-3xl font-semibold text-violet-600">
            01 — Juice
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {juices.map((juice, index) => (
              <li className="flex justify-center mb-6" key={index}>
                <div className="menu__list-item">
                  <div className="menu__list-img-container mb-2 w-72 h-72 flex justify-center items-center bg-violet-100">
                    <img src="./assets/product-1.png" alt="" />
                  </div>
                  <h4 className="text-center font-black text-lime-800 text-xl">
                    {juice.name}
                  </h4>
                  <p className="text-center text-slate-600 text-xl font-semibold">
                    {juice.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
