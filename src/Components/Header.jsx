import React from "react";
import { Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "./Logo";
import AboutPage from "./AboutPage";
import Home from "./Home";
import CardDin from "./CardDin";
import ContactSection from "./ContactSection";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const routePath = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
    {
      name: "About",
      path: "#about",
      element: <AboutPage />,
    },
    {
      name: "Gallery",
      path: "#gallery",
      element: <CardDin />,
    },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Routes> */}
      {routePath.map(({ path, name }, key) => (
        <li className="p-1 font-normal hover:font-bold hover:text-white">
          {/* <Link variant="small"
				color="blue-gray"
				className="flex items-center" to={path}>{name}</Link> */}
          <a href={path} className="flex items-center" key={key}>
            {name}
          </a>
        </li>
      ))}
        <li>
            <button
                  variant="gradient" size="sm" className="hidden lg:block p-1 font-normal hover:font-bold hover:text-white"
                  onClick={() => setShowModal(true)}
                >
              <span>Contact</span>
            </button>
        </li>
    </ul>
  );
  return (
    <>
      <Navbar className="mt-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500  to-rose-400 mx-auto py-2 px-4 lg:px-8 lg:py-4 text-gray-900">
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
          <div className="container mx-auto ">{navList}</div>
            <button
                variant="gradient" size="sm"  className="mb-2 bg-blue-200 text-black active:bg-blue-500 
              font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
              onClick={() => setShowModal(true)}
            >
              <span>Contact</span>
            </button>
        </MobileNav>
      </Navbar>

	  {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5  border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Contact us !</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                {/* <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                  
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div> */}
                <form class="flex w-full max-w-sm space-x-3">
                    <div class="w-full max-w-2xl px-5 py-10 m-auto  bg-white rounded-lg shadow dark:bg-gray-800">
                {/* <div class="mb-6 text-3xl font-light text-center text-gray-100 dark:text-white">
                    Contact us !
                </div> */}
                
                <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <input type="text" id="contact-form-name" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                            </div>
                        </div>
                        <div class="col-span-2 lg:col-span-1">
                            <div class=" relative ">
                                <input type="text" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                                </div>
                            </div>
                            <div class="col-span-2">
                                <label class="text-gray-700" for="name">
                                    <textarea class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                                    </textarea>
                                </label>
                            </div>
                            <div class="col-span-2 text-right">
                                <button type="submit" class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-dark w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
