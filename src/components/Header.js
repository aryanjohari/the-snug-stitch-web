import { Link } from "react-router-dom";
import "../styles.css";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  return (
    <header class="bg-black drop-shadow-xl h-[100px]">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="hidden md:flex-1 md:flex md:items-center md:gap-12 mt-10">
            <Link to="/" className=" text-teal-600 flex gap-2">
              <img
                src="/images/logo.jpg"
                alt="the-snug-stitch-logo"
                className="object-contain w-14"
              ></img>
              <img src="/images/logoname.jpg" alt="logo-name" className="h-14"/>
            </Link>
          </div>
          <div className="mt-10 flex">
          <Link to="/" className=" text-teal-600 flex gap-2 md:hidden">
              <img src="/images/logoname.jpg" alt="logo-name" className="h-14"/>
            </Link>
          </div>
          <div className="mt-10 flex width-screen items-center">
          <Link to="/" className="md:hidden">
              <img src="/images/logo.jpg" alt="logo" className="h-14"></img>
            </Link>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm mt-10">
                <li>
                  <a
                    href="/products"
                    className="text-white text-lg transition hover:text-gray-500/75"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/our-works"
                    className="text-white text-lg transition hover:text-gray-500/75"
                  >
                    Our Works
                  </a>
                </li>

                <li>
                  <a
                    href="/services"
                    className="text-white text-lg transition hover:text-gray-500/75"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="/printing"
                    className="text-white text-lg transition hover:text-gray-500/75"
                  >
                    Printing
                  </a>
                </li>

                <li>
                  <a
                    href="/clients"
                    className="text-white text-lg transition hover:text-gray-500/75"
                  >
                    Clients
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="text-white text-lg transition hover:text-gray-500/75"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="text-white text-lg transition hover:text-gray-500/75"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4 mr-7 mt-10">
              <div class="block md:hidden">
                <button
                  class="rounded  transition"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <img src="/images/menu.png" alt="menu-icon" className="bg-black"></img>
                </button>
                <div
                    className="fixed mt-5 left-0 h-[320px] w-screen bg-black hidden"
                  ></div>
                {isOpen && (
                  <div
                    className="fixed mt-5 left-0 h-[320px] w-screen bg-black"
                  >
                    <ul class="z-50 bg-gray-100">
                      <li>
                      <button className="w-full text-left" onClick={() => {
                    setIsOpen(!isOpen);
                  }}>
                      <a
                        href="/products"
                        className="block px-4 py-2 text-sm font-medium bg-black text-white"
                      >
                        Products
                      </a>
                      </button>
                      </li>
                      <li>
                      <button className="w-full text-left" onClick={() => {
                    setIsOpen(!isOpen);
                  }}>
                    <a
                        href="/our-works"
                        className="block px-4 py-2 text-sm font-medium bg-black text-white"
                      >
                        Our work
                      </a>
                      </button>
                      </li>
                      <li>
                      <button className="w-full text-left" onClick={() => {
                    setIsOpen(!isOpen);
                  }}>
                      <a                   
                        href="/services"
                        className="block bg-black px-4 py-2 text-sm font-medium text-white"
                      >
                        Services
                      </a>
                      </button>
                      </li>
                      <li>
                      <button className="w-full text-left" onClick={() => {
                    setIsOpen(!isOpen);
                  }}>
                      <a
                        href="/clients"
                        className="block bg-black px-4 py-2 text-sm font-medium text-white"
                      >
                        Clients
                      </a>
                      </button>
                      </li>
                      <li>
                      <button className="w-full text-left" onClick={() => {
                    setIsOpen(!isOpen);
                  }}>
                      <a
                        href="/printing"
                        className="block bg-black px-4 py-2 text-sm font-medium text-white"
                      >
                        Printing
                      </a>
                      </button>
                      </li>
                      <li>
                        <button className="w-full text-left" onClick={() => {
                    setIsOpen(!isOpen);
                  }}>
                      <a
                        href="/about"
                        className="block bg-black px-4 py-2 text-sm font-medium text-white"
                      >
                        About Us
                      </a>
                      </button>
                      </li>
                      <li>
                      <button className="w-full text-left" onClick={() => {
                    setIsOpen(!isOpen);
                  }}>
                      <a
                        href="/contact"
                        className="block bg-black px-4 py-2 text-sm font-medium text-white"
                      >
                        Contact Us
                      </a>
                      </button>
                      </li>
                    </ul>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
