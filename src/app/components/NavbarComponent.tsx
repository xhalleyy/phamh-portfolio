"use client";

import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, Tooltip, } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  // const custombutton = {
  //   "base": "inline-flex",
  //   "position": {
  //     "none": "",
  //     "start": "rounded-r-none focus:ring-2",
  //     "middle": "rounded-none border-l-0 pl-0 focus:ring-2",
  //     "end": "rounded-l-none border-l-0 pl-0 focus:ring-2"
  //   }
  // }

  const customNav = {
    "root": {
      "base": "fixed z-40 overflow-y-auto p-4 transition-transform bg-[#e9dfd5] pt-36 flex flex-col items-center dark:bg-gray-800",
      "backdrop": "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
      "edge": "bottom-16",
      "position": {
        "top": {
          "on": "left-0 right-0 top-0 w-full transform-none",
          "off": "left-0 right-0 top-0 w-full -translate-y-full"
        },
        "right": {
          "on": "right-0 top-0 h-screen w-80 transform-none",
          "off": "right-0 top-0 h-screen w-80 translate-x-full"
        },
        "bottom": {
          "on": "bottom-0 left-0 right-0 w-full transform-none",
          "off": "bottom-0 left-0 right-0 w-full translate-y-full"
        },
        "left": {
          "on": "left-0 top-0 h-screen w-80 transform-none",
          "off": "left-0 top-0 h-screen w-80 -translate-x-full"
        }
      }
    },
    "header": {
      "inner": {
        "closeButton": "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        "closeIcon": "h-4 w-4",
        "titleIcon": "me-2.5 h-4 w-4",
        "titleText": "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
      },
      "collapsed": {
        "on": "hidden",
        "off": "block"
      }
    },
    "items": {
      "base": ""
    }
  }

  return (
    <>
      <div className="flex lg:hidden bg-[#e9dfd5] justify-end items-center pe-5 h-16">
        <div>
          <button onClick={() => setIsOpen(true)}>
            <MenuIcon sx={{fontSize: 30}}/>
          </button>
        </div>
        <Drawer theme={customNav} open={isOpen} onClose={handleClose} position="right">
          <Drawer.Items>
            <div className="font-railway text-[#5A233B] text-2xl font-semibold text-center flex flex-col gap-3">
              <a href="#about">
                <div className="cursor-pointer">About</div>
              </a>
              <a href="#skills">
                <div className="cursor-pointer">Skills</div>
              </a>
              <a href="#projects">
                <div className="cursor-pointer">Projects</div>
              </a>
              <a href="#contact">
                <div className="cursor-pointer">Contact</div>
              </a>
              <div className="flex justify-center mt-3 gap-6">
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
          </Drawer.Items>
        </Drawer>
      </div>
      <div className="hidden h-16 bg-[#e9dfd5]  lg:flex justify-end items-center pe-14">
        <div className="font-railway text-[#5A233B] text-xl font-semibold flex items-center gap-16 ">
          <a href="#about">
            <div className="cursor-pointer">About</div>
          </a>
          <a href="#skills">
            <div className="cursor-pointer">Skills</div>
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
    </>

  )
}

export default NavbarComponent
