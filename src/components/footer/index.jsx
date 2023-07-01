import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 sm:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center mb-8">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Logo</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            optio perferendis ad ab neque nihil, dolores consequuntur ipsum it
            end.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">BC SPCA</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Find a friend</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#">How to adopt?</a>
            </li>
            <li>
              <a href="#">Dogs</a>
            </li>
            <li>
              <a href="#">Cats</a>
            </li>
            <li>
              <a href="#">Other pets</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <h2 className="text-xl font-bold mb-4">Stay in Touch</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#">Volunteer</a>
            </li>
            <li>
              <a href="#">Foster</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The British Columbia Society for the
          Prevention of Cruelty to Animals (BC SPCA).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
