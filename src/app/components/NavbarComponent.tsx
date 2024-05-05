"use client";

import Link from "next/link";
import { Tooltip } from "flowbite-react";
import Image from "next/image";

const NavbarComponent = () => {
  return (

    <div className="h-16 bg-[#e9dfd5]  flex justify-end items-center pe-20">
      <div className="font-railway text-[#5A233B] text-xl font-semibold flex items-center gap-16 ">
        <a href="#about">
          <div className="cursor-pointer">About</div>
        </a>
        <a href="#projects">
          <div className="cursor-pointer">Projects</div>
        </a>
        <a href="#contact">
          <div className="cursor-pointer">Contact</div>
        </a>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/halleytpham" target="_blank">
            <Tooltip content="LinkedIn" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
              <Image src="/linkedin.png" width={36} height={36} alt="linkedIn" />
            </Tooltip>
          </a>
          <a href="https://drive.google.com/file/d/1eMjkuJP6hVoYu0DrmH44ydaaGW9pDsGd/view?usp=sharing" target="_blank">
            <Tooltip content="Résumé" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
              <Image src="/contact-res.png" width={36} height={36} alt="linkedIn" />
            </Tooltip>
          </a>
          <a href="https://github.com/xhalleyy" target="_blank">
            <Tooltip content="GitHub" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
              <Image src="/contact-github.png" width={36} height={36} alt="linkedIn" />
            </Tooltip>
          </a>
        </div>
      </div>
    </div>

  )
}

export default NavbarComponent
