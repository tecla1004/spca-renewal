import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import SearchBar from "../searchBar";
import logo from "../../../public/assets/logo/logo_bcspca.svg";
import Button from "../common/button";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="bg-white p-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-3 py-3 md:pl-2">
        <Link href="/" className="text-3xl font-bold">
          <Image src={logo} alt="logo" width={140} />
        </Link>
        <div className="flex gap-5">
          <IoSearch className="block md:hidden h-6 w-6" />
          <button className="block md:hidden" onClick={toggleMenu}>
            {isExpanded ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isExpanded ? "block" : "hidden"
          } md:flex md:items-center md:justify-end md:flex-1 md:gap-4 font-medium`}
        >
          <li>
            <Link href="/adopt" className="px-2 py-1 block hover:text-gray-500">
              Adopt
            </Link>
          </li>
          <li>
            <Link href="/help" className="px-2 py-1 block hover:text-gray-500">
              Ways to help
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="px-2 py-1 block hover:text-gray-500"
            >
              Programs & Services
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="px-2 py-1 block hover:text-gray-500"
            >
              News & Events
            </Link>
          </li>
        </ul>
        <SearchBar width="w-36" />
        <Button label="Donate" />
      </nav>
    </header>
  );
};

export default Header;
