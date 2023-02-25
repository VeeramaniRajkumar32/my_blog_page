import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "./Logo";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:font-bold hover:text-white"
      >
        <a href="#" className="flex items-center  hover:divide-green-600 ">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:font-bold hover:text-white"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:font-bold hover:text-white"
      >
        <a href="#" className="flex items-center">
          Gallery
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:font-bold hover:text-white"
      >
        <a href="#" className="flex items-center">
          Content
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:font-bold hover:text-white"
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="2 relative h-screen overflow-hidden bg-indigo-900">
        {/* <img src="/images/212811.jpg" class="absolute object-cover w-full h-full"/>
			<img src="/images/1756080.jpg" class="absolute object-cover w-full h-full"/> */}
        <img
          src="/images/Jtj5S2.jpg"
          class="absolute object-cover w-full h-full"
        />
        <div class="absolute inset-0 bg-black opacity-25"></div>
			<Navbar className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 text-gray-900">
				<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
					<Logo />
					
					<div className="hidden lg:block">{navList}</div>
					{/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
						<span>Buy Now</span>
						</Button> */}
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
				</div>
			</MobileNav>
			</Navbar>
        <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span class="font-bold sm:text-3xl text-sky-400">Veeramani Rajkumar</span>
            <h1 class="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
              Let yourself be carried
              <br />
              by nature
            </h1>
            <a
              href="#"
              className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
