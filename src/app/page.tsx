'use client'

import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";
import { Tooltip } from "flowbite-react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { grey } from '@mui/material/colors';
import ProjectTabsComponent from "./components/ProjectTabsComponent";

export default function Home() {
  return (
    <div className=" bg-white">
      <NavbarComponent />
      <div className="bg-[#5A233B] flex flex-1 flex-col">
        <div className=" grid grid-cols-3 gap-5 items-center px-16">
          <div className="col-span-1 grid justify-center">
            <Image
              src="/me.png"
              width={520}
              height={520}
              alt="Picture of Halley" />
          </div>
          <div className="col-span-2 text-[#f5ede4]">
            <h1 className="font-deuts text-[110px] py-5 text-center">Halley Pham</h1>
            <p className="font-railway text-4xl py-1.5 mb-3 text-center text-[#99CAD9] font-bold">Junior Software Developer</p>
            <p className="font-railway text-2xl">Hello! I'm currently an aspiring web developer with a strong foundation in HTML, CSS, JavaScript, and React. I have a particular passion for front-end development, where I find joy in crafting visually appealing and user-friendly interfaces. Additionally, I am actively expanding my skill set to become a well-rounded developer, such as working in C# and creating APIs.</p>
          </div>
        </div>
        <div id="skills" className="grid grid-cols-4 gap-10 my-16 px-5 items-center">
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-[#99CAD9]">Libraries</p>
            <div className="flex flex-row gap-4 mt-5 items-center">
              <Tooltip content="React" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/react-librarys.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Material UI" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/mui.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Unity" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/unity.png" width={50} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-[#99CAD9]">Languages</p>
            <div className="flex flex-row gap-3 mt-5 items-center">
              <Tooltip content="JavaScript" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/js.png" width={45} height={43} alt="react" className="rounded-sm" />
              </Tooltip>
              <Tooltip content="HTML5" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/HTML.png" width={45} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="CSS" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/CSS.png" width={45} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="TypeScript" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/typescript.png" width={45} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="C#" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/csharp.png" width={50} height={45} alt="react" />
              </Tooltip>
              <Tooltip content="SQL" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/sql.png" width={50} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-[#99CAD9]">Frameworks</p>
            <div className="flex flex-row gap-4 mt-5 items-center">
              <Tooltip content="TailwindCSS" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/tailwind1.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Bootstrap" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/bootstrap.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Next.js" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/nextjs.png" width={47} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-railway font-medium text-[#99CAD9]">Productivity</p>
            <div className="flex flex-row gap-3 mt-5 items-center">
              <Tooltip content="Visual Studio Code" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/vscode.png" width={47} height={47} alt="react" />
              </Tooltip>
              <Tooltip content="GitHub" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/github.png" width={47} height={47} alt="react" />
              </Tooltip>
              <Tooltip content="Slack" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/slack.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Azure" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/azure.png" width={47} height={47} alt="react" />
              </Tooltip>
              <Tooltip content="Jira" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/jira.png" width={50} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Figma" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/figma.png" width={34} height={50} alt="react" />
              </Tooltip>
              <Tooltip content="Notion" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
                <Image src="/notion.png" width={45} height={50} alt="react" />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-12">
          <a href="#projects">
            <div className="flex flex-col justify-center items-center blink-class cursor-pointer">
              <h1 className="font-railway text-xl tracking-wider text-[#f5ede4] font-medium mb-2">see projects...</h1>
              <KeyboardDoubleArrowDownIcon sx={{ fontSize: 30, color: grey[50] }} />
            </div>
          </a>

        </div>

      </div>

      <div className="bg-[rgb(221,216,213)] relative">
        <div className="px-20 py-10">
          <h1 className="text-5xl font-railway font-medium text-[rgb(2,88,111)] absolute">Projects</h1>
          <ProjectTabsComponent />
        </div>
      </div>

      <div id="contact" className="bg-[rgb(2,88,111)] flex flex-col justify-center items-center text-center pt-16 pb-10">
        <h1 className="text-[#f5ede4] text-5xl font-medium font-railway">Contact</h1>
        <div className="font-railway text-[#f5ede4] leading-8 text-xl mt-7 ">
          <p>hpham@codestack.co</p>
          <p>(209)-244-8086</p>
          <p>Stockton, CA</p>
          <div className="flex flex-row my-6 gap-6 justify-center">
          <a href="https://www.linkedin.com/in/halleytpham" target="_blank">
            <Tooltip content="LinkedIn" placement="left" style="light" className="px-4 mt-2 font-railway text-lg">
              <Image src="/linkedin.png" width={40} height={40} alt="linkedIn" />
            </Tooltip>
          </a>
          <a href="https://drive.google.com/file/d/1eMjkuJP6hVoYu0DrmH44ydaaGW9pDsGd/view?usp=sharing" target="_blank">
            <Tooltip content="Résumé" placement="bottom" style="light" className="px-4 mt-2 font-railway text-lg">
              <Image src="/contact-res.png" width={40} height={40} alt="linkedIn" />
            </Tooltip>
          </a>
          <a href="https://github.com/xhalleyy" target="_blank">
            <Tooltip content="GitHub" placement="right" style="light" className="px-4 mt-2 font-railway text-lg">
              <Image src="/contact-github.png" width={40} height={40} alt="linkedIn" />
            </Tooltip>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
