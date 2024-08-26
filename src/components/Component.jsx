import React, { useState, useRef } from "react";

import { RiUpload2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Component = ({ tableName, TableIcon, tables, onAddComponent }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between border-t border-b py-1 px-5 cursor-pointer"
        onClick={() => setIsShow(!isShow)}
      >
        <div className="flex gap-5 items-center">
          <TableIcon className="w-5 h-5" />
          <div className="rounded-md py-1 px-5">
            <h1 className="text-md font-semibold">{tableName}</h1>
          </div>
        </div>
        {isShow ? (
          <IoIosArrowUp className="w-5 h-5" />
        ) : (
          <IoIosArrowDown className="w-5 h-5" />
        )}
      </div>

      {isShow && (
        <div className="bg-white">
          <div className="p-5 grid grid-cols-3 gap-5">
            {tables.map((table, index) => (
              <div
                key={index}
                className="w-20 h-20 border-black border-2 rounded-lg cursor-pointer"
                onClick={() => onAddComponent(table)}
              >
                <img src={table} alt="table" className="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Component;
