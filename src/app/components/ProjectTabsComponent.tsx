import React, { useEffect } from 'react'
import { CustomFlowbiteTheme, Tabs, Card } from "flowbite-react";
import styled from "@emotion/styled/macro";
import UnityComponent from './UnityComponent';
import { Tilt } from 'react-tilt'

const ProjectTabsComponent = () => {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 15,     // max tilt rotation (degrees)
        perspective: 3000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 3000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    const customTabs: CustomFlowbiteTheme['tabs'] = {
        "base": "flex flex-col gap-2",
        "tablist": {
            "base": "flex md:justify-end justify-center text-center items-center",
            "styles": {
                "pills": "flex-wrap  space-x-2 text-md font-railway font-medium text-gray-500 dark:text-gray-400 lg:gap-5 mt-[35px] md:mt-[-12px]",
            },
            "tabitem": {
                "base": "flex items-center justify-center rounded-t-lg px-5 py-2 text-md font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-[#99CAD9] disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                "styles": {
                    "default": {
                        "base": "rounded-t-lg",
                        "active": {
                            "on": "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                            "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
                        }
                    },
                    "pills": {
                        "base": "",
                        "active": {
                            "on": "rounded-lg bg-[rgb(2,88,111)] text-white",
                            "off": "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                        }
                    },
                },
                "icon": "mr-2 h-5 w-5"
            }
        },
        "tabitemcontainer": {
            "base": "",
            "styles": {

                "pills": "font-railway text-lg md:px-5 flex gap-5 justify-center ",
            }
        },
        "tabpanel": "py-3"
    }

    const customCard: CustomFlowbiteTheme['card'] = {
        "root": {
            "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 font-railway",
            "children": "flex h-full flex-col justify-center gap-4 p-6 font-railway",
            "horizontal": {
                "off": "flex-col font-railway",
                "on": "flex-col md:max-w-xl md:flex-row font-railway"
            },
            "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-t-lg h-72",
                "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }
        }
    }

    return (
        <div id='projects' className=' mt-5 mb-14'>
            <Tabs aria-label="Pills" theme={customTabs} style="pills">
                <Tabs.Item active title="React">
                    <div className='xl:grid xl:grid-cols-2 md:flex md:flex-col justify-around items-center gap-14 mt-14'>
                        <Tilt className='xl:col-span-1 w-[330px] h-[300px] md:!w-[550px] md:!h-[400px] mb-10 md:mb-0' options={defaultOptions} >
                            <div className="card-wrapper w-[330px] h-[300px] md:!w-[550px] md:!h-[400px]">
                                <div className="card-top">
                                    <img className="image" src="/mangadictionhome.png" alt='MangaDiction site!' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">MangaDiction!</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">Team Lead of this Fullstack Application, where this web app creates communities with other readers and allows users to discuss anything manga related.</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: C#, Next.JS, TailwindCSS, Flowbite React, Material UI, PrimeReact</p>
                                    <a href="https://manga-diction.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>
                                    {/* NEXT JS TAILWIND CSS FLOWBITE REACT MATERIAL UI, PRIME REACT */}
                                </div>
                            </div>
                        </Tilt>
                        <Tilt className='col-span-1 w-[330px] h-[300px] md:w-[550px] md:h-[400px]' options={defaultOptions}>
                            <div className="card-wrapper w-[330px] h-[300px] md:w-[550px] md:h-[400px]">
                                <div className="card-top">
                                    <img className="image" src="/WeatherAPI.png" alt='Weather Application' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">Weather API</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">Built an application with OpenWeather API where one can search a city, favorite it, and have it display current weather information and a 5-day forecast.</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: Next.JS, TailwindCSS, Flowbite React, Material UI</p>
                                    <a href="https://react-weather-api-sooty.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>

                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div className='flex justify-center items-center gap-14 mt-10 md:mt-14 container'>
                        <Tilt className='xl:col-span-1 w-[330px] h-[300px] md:w-[550px] md:h-[400px] mb-10 md:mb-0' options={defaultOptions}>
                            <div className="card-wrapper w-[330px] h-[300px] md:w-[550px] md:h-[400px]">
                                <div className="card-top">
                                    <img className="image" src="/PokemonAPI.png" alt='Pokedex' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">PokéDex</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">PokéDex is an application with proficiency in APIs and higher order array functions to display a Pokemon and their abilities, moves, location, and evolutions.</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: Next.JS, TailwindCSS, Flowbite React, Material UI</p>
                                    <a href="https://reactpokemon-eight.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>

                                </div>
                            </div>
                        </Tilt>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Vanilla JS">
                    <div className='xl:grid xl:grid-cols-2 md:flex md:flex-col justify-around items-center gap-14 mt-14'>
                        <Tilt className='xl:col-span-1 w-[330px] h-[300px] md:!w-[550px] md:!h-[400px] mb-10 md:mb-0' options={defaultOptions} >
                            <div className="card-wrapper w-[330px] h-[300px] md:!w-[550px] md:!h-[400px]">
                                <div className="card-top">
                                    <img className="image" src="/RPSLS.png" alt='Rock Paper Scissors Lizard Spock!' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">Rock Paper Scissors Lizard Spock</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">RPSLS demonstrates the fundamentals of switch cases and if, else, else if in a stylistic and fun concept of the basic Rock Paper Scissors Game.</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: JavaScript, Bootstrap</p>
                                    <a href="https://pham-h-rpsls.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt className='col-span-1 w-[330px] h-[300px] md:w-[550px] md:h-[400px]' options={defaultOptions}>
                            <div className="card-wrapper w-[330px] h-[300px] md:w-[550px] md:h-[400px]">
                                <div className="card-top">
                                    <img className="image" src="/teaamo.png" alt='Business design for Tea Amo' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">Tea Amo</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">Tasked to pick a business and (re)design a website for said business. With proficiency in CSS and HTML, our group picked a bubble tea place and highlighted their business with a pastel and bubbly concept.</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: JavaScript, Bootstrap</p>
                                    <a href="https://business-redevelop.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>

                                </div>
                            </div>
                        </Tilt>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Frontend Mentor">
                    <p className='text-center text-[rgb(2,88,111)] text-xl font-railway font-semibold mb-5 mt-2'>Given the protypes and have to replicate the designs with responsiveness working as well. </p>
                    <div className='xl:grid xl:grid-cols-2 flex flex-col justify-around items-center md:gap-14 mt-14 mx-auto'>
                        <Tilt className='xl:col-span-1 w-[330px] h-[300px] md:!w-[550px] md:!h-[400px] mb-10 md:mb-0' options={defaultOptions} >
                            <div className="card-wrapper w-[330px] h-[300px] md:!w-[550px] md:!h-[400px]">
                            <div className="card-top">
                                    <img className="image" src="/socialmedia.jpg" alt='Image of Tech news home page' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">Tech News Home Page</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">Highlights our ability to replicate a design</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: JavaScript, Tailwind</p>
                                    <a href="https://news-homepage-main-bay.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt className='col-span-1 w-[330px] h-[300px] md:w-[550px] md:h-[400px]' options={defaultOptions}>
                            <div className="card-wrapper w-[330px] h-[300px] md:w-[550px] md:h-[400px]">
                            <div className="card-top">
                                    <img className="image" src="/advicegen.jpg" alt='Advice Generator' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">Advice Generator</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">Highlights our ability to replicate a design</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: React, TypeScript, Tailwind</p>
                                    <a href="https://advicegenerator-inky.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div className='flex justify-center items-center gap-14 mt-10 md:mt-14 container'>
                        <Tilt className='xl:col-span-1 w-[330px] h-[300px] md:w-[550px] md:h-[400px] mb-10 md:mb-0' options={defaultOptions}>
                            <div className="card-wrapper w-[330px] h-[300px] md:w-[550px] md:h-[400px]">
                            <div className="card-top">
                                    <img className="image" src="/tipcalculator.jpg" alt='Tip Calculator' />
                                </div>
                                <div className="card-bottom px-[10px] py-[10px] md:py-[100px] md:px-[20px]">
                                    <span className="top-text text-2xl font-bold font-railway text-white">Tip Calculator</span><br />
                                    <span className="font-normal text-[16px] md:text-xl text-white dark:text-gray-400 font-railway">Highlights our ability to replicate a design</span>
                                    <p className='font-railway text-[16px] text-amber-200 font-semibold'>Built With: Next.js, TypeScript, Tailwind</p>
                                    <a href="https://tipcalculator-pearl.vercel.app/" target='_blank'><button className="button">Go To Site</button></a>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Unity">
                    <p className='text-center text-[rgb(2,88,111)] text-xl font-railway font-semibold mb-5 mt-3'>Tasked to create a trivia with 3 difficulty modes that randomizes 50 unique questions for each, with the utilization of a correct answer counter.</p>
                    <div className='flex justify-center mt-7'>
                        <UnityComponent />

                    </div>
                </Tabs.Item>
            </Tabs>
        </div >
    )
}

export default ProjectTabsComponent
