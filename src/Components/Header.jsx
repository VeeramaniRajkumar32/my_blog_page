import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
        
    {/* <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Material Tailwind</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Buy Now</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar> */}
        <div className="2 relative h-screen overflow-hidden bg-indigo-900">
    <img src="/images/landscape/5.svg" class="absolute object-cover w-full h-full"/>
    <div class="absolute inset-0 bg-black opacity-25">
    </div>
    <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container px-6 py-4 mx-auto md:px-12">
            <div class="items-center justify-between md:flex">
                <div class="flex items-center justify-between">
                    <a href="#" class="text-white">
                        <svg class="w-8 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
                            <defs>
                            </defs>
                            <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
                            </path>
                            <path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
                            </path>
                        </svg>
                    </a>
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="items-center hidden md:flex">
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        About us
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Calendar
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Contact us
                    </a>
                </div>
            </div>
        </nav>
    </header>
    <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span class="font-bold text-yellow-400 uppercase">
                Himalaya
            </span>
            <h1 class="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                Let yourself be carried
                <br/>
                    by nature
            </h1>
            <a href="#" class="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Discover
            </a>
        </div>
    </div>
        </div> 
    {/* <div className="3">
        <nav class="bg-white dark:bg-gray-800  shadow ">
            <div class="px-8 mx-auto max-w-7xl">
                <div class="flex items-center justify-between h-16">
                    <div class="w-full justify-between flex items-center">
                        <a class="flex-shrink-0" href="/">
                            <img class="w-8 h-8" src="/icons/rocket.svg" alt="Workflow"/>
                        </a>
                        <div class="hidden md:block">
                            <div class="flex items-baseline ml-10 space-x-4">
                                <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                    Home
                                </a>
                                <a class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                    Gallery
                                </a>
                                <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                    Content
                                </a>
                                <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="flex items-center ml-4 md:ml-6">
                        </div>
                    </div>
                    <div class="flex -mr-2 md:hidden">
                        <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Home
                    </a>
                    <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Gallery
                    </a>
                    <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Content
                    </a>
                    <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    </div>  */}
    </>


  );
}

function Header1() {
  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold underline">Veeramani Rajkumar</h1>




    </div>
  );
}

// export default Header1;
