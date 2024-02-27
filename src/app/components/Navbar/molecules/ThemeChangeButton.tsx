"use client";
import React, { useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const ThemeChangeButton = () => {
  const [dark, setDark] = useState(true);
  const toggleDark = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDark}>
      {dark ? (
        <HiOutlineSun className="w-10 h-10 text-accent" />
      ) : (
        <HiOutlineMoon className="w-10 h-10 text-accent" />
      )}
    </button>
  );
};

export default ThemeChangeButton;
