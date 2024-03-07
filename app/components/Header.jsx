import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="section-header pt-4 px-4">
      <nav className="header__nav p-4 container mx-auto bg-lime-800 text-white flex justify-between items-center">
        <Link href="/">
          <Image width={128} height={48} src="./assets/logo.svg" alt="" />
        </Link>
        <ul className="hidden gap-8 flex-row md:flex font-semibold text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#menu-section">Menu</Link>
          </li>
          <li>
            <Link href="#location-section">Location</Link>
          </li>
          <li>
            <Link href="#">Mission</Link>
          </li>
        </ul>
        <button className="btn-primary-white">
          <Link
            target="_blank"
            href="https://gofood.co.id/id/tasikmalaya/restaurant/toko-kue-48-bffa215b-d88e-4f96-9bb1-a1e8a25501cf"
          >
            Order Now!
          </Link>
        </button>
      </nav>
    </header>
  );
};

// https://food.grab.com/id/id/restaurant/toko-kue-48-empangsari-delivery/6-C6EZEULVTKEBEX?

export default Header;
