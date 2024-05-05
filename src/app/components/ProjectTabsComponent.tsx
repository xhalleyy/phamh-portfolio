import React from 'react'
import { CustomFlowbiteTheme, Tabs, Card } from "flowbite-react";
import styled from "@emotion/styled/macro";
import UnityComponent from './UnityComponent';

const ProjectTabsComponent = () => {

    const customTabs: CustomFlowbiteTheme['tabs'] = {
        "base": "flex flex-col gap-2",
        "tablist": {
            "base": "flex justify-end text-center",
            "styles": {
                "pills": "flex-wrap space-x-2 text-md font-railway font-medium text-gray-500 dark:text-gray-400 gap-5",
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
            "base": "f",
            "styles": {

                "pills": "font-railway text-lg px-5 flex gap-5 justify-center",
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
                    <div className='grid grid-cols-3 justify-center gap-14 mt-3'>
                        <a href="https://manga-diction.vercel.app/" target='_blank'>
                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="MangaDiction!"
                                imgSrc="/mangadiction.png"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    MangaDiction! (In Progress)
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 font-railway">
                                    Team Lead of this Fullstack Application, where this web app creates communities with other readers and allows users to discuss anything manga related.
                                </p>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: Next.JS, TailwindCSS, Flowbite React, Material UI, PrimeReact, C#</p>
                            </Card>
                        </a>
                        <a href="https://react-weather-api-sooty.vercel.app/" target='_blank'>
                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="Weather API"
                                imgSrc="/WeatherAPI.png"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    Weather API
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 font-railway">
                                    Built an application with OpenWeather API where one can search a city, favorite it, and have it display current weather information and a 5-day forecast.
                                </p>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: Next.JS, TailwindCSS, Flowbite React, Material UI</p>
                            </Card>
                        </a>
                        <a href="https://reactpokemon-eight.vercel.app/" target='_blank'>
                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="Pokedex"
                                imgSrc="/PokemonAPI.png"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    PokéDex
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 font-railway">
                                    PokéDex is an application with proficiency in APIs and higher order array functions to display a Pokemon and their abilities, moves, location, and evolutions.
                                </p>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: Next.JS, TailwindCSS, Flowbite React, Material UI</p>
                            </Card>
                        </a>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Vanilla JS">
                    <div className='grid grid-cols-2 justify-center gap-14 mt-3'>
                        <a href="https://pham-h-rpsls.vercel.app/" target='_blank'>
                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="Rock Paper Scissors Lizard Spock"
                                imgSrc="/RPSLS.png"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    Rock Paper Scissors Lizard Spock
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 font-railway">
                                    RPSLS demonstrates the fundamentals of switch cases and if, else, else if in a stylistic and fun concept of the basic Rock Paper Scissors Game.
                                </p>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: JavaScript, Bootstrap</p>
                            </Card>
                        </a>
                        <a href="https://business-redevelop.vercel.app/" target='_blank'>
                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="Tea Amo"
                                imgSrc="/teaamo.png"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    Tea Amo (Business Design)
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 font-railway">
                                    Tasked to pick a business and (re)design a website for said business. Picked a primarily Boba place and highlighted their business with a pastel and bubbly concept.
                                </p>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: JavaScript, Bootstrap</p>
                            </Card>
                        </a>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Frontend Mentor">
                    <p className='text-center text-[rgb(2,88,111)] text-xl font-railway font-semibold mb-5'>Given the protypes and have to replicate the designs with responsiveness working as well. </p>
                    <div className='grid grid-cols-3 justify-center gap-14'>
                        <a href="https://news-homepage-main-bay.vercel.app/" target='_blank'>
                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="News Dashboard"
                                imgSrc="/socialmedia.jpg"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    Tech News Home Page
                                </h5>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: JavaScript, Tailwind</p>
                            </Card>
                        </a>
                        <a href="https://advicegenerator-inky.vercel.app/" target='_blank'>
                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="News Dashboard"
                                imgSrc="/advicegen.jpg"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    Advice Generator
                                </h5>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: React, TypeScript, Tailwind</p>
                            </Card>
                        </a>
                        <a href="https://tipcalculator-pearl.vercel.app/" target='_blank'>

                            <Card theme={customCard}
                                className="max-w-md col-span-1"
                                imgAlt="News Dashboard"
                                imgSrc="/tipcalculator.jpg"
                            >
                                <h5 className="text-2xl font-bold font-railway text-[rgb(2,88,111)]">
                                    Tip Calculator
                                </h5>
                                <p className="font-medium text-gray-700 dark:text-gray-400 font-railway">Built With: React, TypeScript, Tailwind</p>
                            </Card>
                        </a>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Unity">
                    <p className='text-center text-[rgb(2,88,111)] text-xl font-railway font-semibold mb-5'>Tasked to create a trivia with 3 difficulty modes that randomizes 50 unique questions for each, with the utilization of a correct answer counter.</p>
                    <div className='flex justify-center mt-3'>
                        <UnityComponent />

                    </div>
                </Tabs.Item>
            </Tabs>
        </div>
    )
}

export default ProjectTabsComponent
