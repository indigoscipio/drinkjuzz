import React from "react";

const MenuSection = () => {
  return (
    <section className="menu-section">
      <div className="container mx-auto">
        <h2>Our Product Lineups</h2>
        <div className="menu__juice-container">
          <h3>Juice</h3>

          <ul>
            <li>
              <div className="menu__list-item">
                <img src="" alt="" />
                <h4>Strawberry Smoothie</h4>
                <p>IDR 5,000</p>
              </div>
            </li>
            <li>
              <div className="menu__list-item">
                <img src="" alt="" />
                <h4>Strawberry Smoothie</h4>
                <p>IDR 5,000</p>
              </div>
            </li>
            <li>
              <div className="menu__list-item">
                <img src="" alt="" />
                <h4>Strawberry Smoothie</h4>
                <p>IDR 5,000</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
