import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import Button from "./Button";
const Navbar = () => {
  const tamImage = 70;
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={logo} alt="logo" width={tamImage} height={tamImage} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {/* recorremos todos los links desde la carpeta constants */}
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer 
                pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Boton para el login */}
      <div>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
