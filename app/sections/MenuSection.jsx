import React from "react";

const MenuSection = () => {
  const juices = [
    {
      name: "Strawberry Smoothie",
      price: "IDR 5,000",
      img: "./assets/menu/menu-1.png",
    },
    {
      name: "Apple Juice",
      price: "IDR 7,000",
      img: "./assets/menu/menu-2.png",
    },
    {
      name: "Orange Juice",
      price: "IDR 6,000",
      img: "./assets/menu/menu-3.png",
    },
    {
      name: "Orange Juice",
      price: "IDR 6,000",
      img: "./assets/menu/menu-4.png",
    },
    {
      name: "Orange Juice",
      price: "IDR 6,000",
      img: "./assets/menu/menu-5.png",
    },
    {
      name: "Orange Juice",
      price: "IDR 6,000",
      img: "./assets/menu/menu-6.png",
    },
    {
      name: "Orange Juice",
      price: "IDR 6,000",
      img: "./assets/menu/menu-7.png",
    },
    {
      name: "Orange Juice",
      price: "IDR 6,000",
      img: "./assets/menu/menu-8.png",
    },
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
                    <img src={juice.img} />
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
