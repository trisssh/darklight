import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaMoon,FaSun } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";


function App() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark':'light'
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === "dark");
  };


  return (
    <>
      <body className="bg-white dark:bg-gray-950">
        <div className="flex justify-center items-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>

          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-center text-blue-700 font-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, .5)",
            }}
          >
            Vite + React
          </h1>

          <h4 className="text-black dark:text-white">
            Dark/Light Mode by Trisha
          </h4>

          <button
            onClick={toggleTheme}
            className="bg-blue-700 text-black dark:text-white border py-2 px-5 rounded cursor-pointer m-1 flex justify-center items-center gap-1"
          >
            <span className="font-bold">Theme </span>
            {theme === "light" ? (
              <FaMoon size={20} />
            ) : (
              <FaSun size={20} />
            )}{" "}
            {theme === "light" ? "Set to Dark mode" : "Set to Light Mode"}
          </button>
        </div>

        <h6 className="text-black dark:text-white  my-2 mx-10 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui off icia deserunt mollit anim id est laborum.
        </h6>

      </body>
    </>
  );
}

export default App
