"use client";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkHover = (index) => {
    setActiveLink(index);
  };

  const handleLinkLeave = () => {
    setActiveLink(null);
  };

  const links = [
    {
      text: "Movies",
      href: "/",
      dropdownItems: ["Popular", "Top Rated", "Upcoming"],
    },
    {
      text: "TV Shows",
      href: "/",
      dropdownItems: ["Popular", "Top Rated", "Airing Today"],
    },
    // Add more links with their dropdown items as needed
  ];
  return (
    <div className="w-full max-w-screen h-12">
      <div className="flex flex-row  bg-gray-900 text-white border rounded-lg m-2 p-2">
        <div className="w-24">Logo</div>
        <div className="flex-1">
          <div className="flex flex-row">
            {links.map((link, index) => (
              <div
                key={index}
                className="flex flex-col relative"
                onMouseEnter={() => handleLinkHover(index)}
                onMouseLeave={handleLinkLeave}
              >
                <a className="w-24 cursor-pointer" href={link.href}>
                  {link.text}
                </a>
                {activeLink === index && (
                  <div className="absolute top-6 w-[100px] rounded-sm cursor-pointer shadow-2xl flex flex-col border bg-gray-800 z-10">
                    {link.dropdownItems.map((item, itemIndex) => (
                      <div className="p-1 hover:bg-slate-500" key={itemIndex}>
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-16">Login</div>
      </div>
    </div>
  );
}

export default NavBar;
