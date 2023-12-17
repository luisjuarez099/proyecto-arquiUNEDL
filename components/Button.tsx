"use client";
import { Flex, Text } from "@radix-ui/themes";
import {Button} from "@radix-ui/themes"
import {PersonIcon} from "@radix-ui/react-icons"
import Link from "next/link";
const boton = () => {
  const tamButton = "10";
  return (
    <div className="p-10 flex">
      <button className="py-3 px-3 w5 rounded bg-transparent hover:bg-blue-100 font-mono hover:font-bold border-blue-500" >
         logout
      </button>
    </div>
  )
};

export default boton;
