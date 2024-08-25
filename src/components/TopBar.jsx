import React from "react";
import { FaTableCells } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="w-full py-3 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-10">
          <div className="border-black border-b-2 pr-10 pt-2">
            <input
              class="w-full bg-transparent text-[18px] text-black font-bold  p-1 placeholder-slate-700 focus:outline-none"
              type="text"
              placeholder="Untitle Design"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-950 hover:bg-white hover:text-blue-950 border-blue-950 border-2 text-white p-2 rounded-md transition duration-300">
            <FaTableCells className="w-6 h-6" />
            <IoIosArrowDropdown className="w-5 h-5 hover:translate-y-2 transition duration-400" />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-lg flex items-center gap-2 p-2 text-blue-950 hover:bg-blue-950 hover:text-white transition duration-300 rounded-md border-2 border-blue-950">
            <p className="font-semibold">Import</p>
            <IoIosArrowDropdown className="w-6 h-6 hover:translate-y-2 transition duration-400" />
          </button>
          <button className="text-lg font-semibold py-2 px-5 bg-transparent text-blue-950 hover:bg-blue-950 hover:text-white tracking-wide transition duration-300 rounded-md border-2 border-blue-950">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
