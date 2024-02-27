import React from "react";
import ThemeChangeButton from "./molecules/ThemeChangeButton";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end bg-backgroundSecondary py-4">
      <ThemeChangeButton />
    </div>
  );
};

export default Navbar;
