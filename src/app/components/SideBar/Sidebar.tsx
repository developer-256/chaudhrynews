import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="w-[23rem] h-screen bg-backgroundSecondary sticky top-0 overflow-y-auto ">
      <div className="p-5">
        <h1 className="font-bold text-3xl font-Lora">
          <span className="text-accent">Chaudhry</span>NEWS
        </h1>
        <div className="flex items-center border border-accent px-4 py-2 rounded-full">
          <input type="text" className="bg-transparent flex-1 outline-none" />
          <HiMagnifyingGlass />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
