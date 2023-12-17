import React from "react";
import { FOOTER_LINKS } from "@/constants";
import logoI from "/public/logo.png";
import Image from "next/image";
const Footer = () => {
  const tamImage = 70;
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 ">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Image src={logoI} alt="" height={tamImage} width={tamImage} className="sm:mx-auto" />  
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          pariatur vero distinctio molestiae doloribus, cupiditate
          exercitationem consequuntur, repellat eos sunt similique est. Maxime
          magnam iure odio labore magni a fuga?
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {FOOTER_LINKS.map((item, idx) => (
          <li className=" hover:text-gray-800">
            <a key={idx} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="justify-between mt-8 items-center sm:flex">
          <div className="mt-4 sm:mt-0">
            <p>&copy; 2022 Float UI All rights reserved.</p>
          </div>  
      </div>
    </footer>
  );
};

export default Footer;
