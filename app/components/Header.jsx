import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="section-header pt-4 px-4">
      <nav className="header__nav p-4 container mx-auto bg-lime-800 text-white flex justify-between items-center">
        <Image width={128} height={48} src="./assets/logo.svg" alt="" />
        <ul className="hidden gap-8 flex-row md:flex">
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Mission</a>
          </li>
        </ul>
        <button className="btn-primary-white">Order Now!</button>
      </nav>
    </header>
  );
};

export default Header;
