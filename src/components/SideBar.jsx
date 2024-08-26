import React,{useRef} from "react";
import { TiThMenu } from "react-icons/ti";
import { RiUpload2Line } from "react-icons/ri";
import Component from "./Component";

// Table images
import { GiRoundTable } from "react-icons/gi";
import Table_1 from "../assets/Tables/3_chairs.png";
import Table_2 from "../assets/Tables/4_chairs.png";
import Table_3 from "../assets/Tables/6_chairs.png";

// Toilets images
import { FaToiletsPortable } from "react-icons/fa6";
import T_1 from "../assets/Toilets/men.png";
import T_2 from "../assets/Toilets/women.png";
import T_3 from "../assets/Toilets/both.png";
import T_4 from "../assets/Toilets/wc.png";

// shops images
import { FaShop } from "react-icons/fa6";
import S_1 from "../assets/Shops/coffee.png";
import S_2 from "../assets/Shops/fast_food.png";
import S_3 from "../assets/Shops/game.png";
import S_4 from "../assets/Shops/pizza.png";

// Other
import { MdEmojiPeople } from "react-icons/md";
import Hospital from "../assets/Other/hospital.png";

const SideBar = ({ onAddComponent }) => {
  const tables = [Table_1, Table_2, Table_3];
  const toilets = [T_1, T_2, T_3, T_4];
  const shops = [S_1, S_2, S_3, S_4];
  const other = [Hospital];

  return (
    <div className="py-5 bg-blue-950 h-full items-start text-start text-white">
      <div className="px-5 flex gap-5 items-center justify-start">
        <TiThMenu className="w-6 h-6" />
        <div className="rounded-md py-1 px-5">
          <h1 className="text-lg font-semibold">Components</h1>
        </div>
      </div>

      <div className="mt-5 overflow-y-auto max-h-[calc(100vh-200px)] scrollbar-custom pr-2">
        <Component
          tableName="Tables"
          TableIcon={GiRoundTable}
          tables={tables}
          onAddComponent={onAddComponent}
        />
        <Component
          tableName="Toilets"
          TableIcon={FaToiletsPortable}
          tables={toilets}
          onAddComponent={onAddComponent}
        />
        <Component
          tableName="Shops"
          TableIcon={FaShop}
          tables={shops}
          onAddComponent={onAddComponent}
        />
        <Component
          tableName="Others"
          TableIcon={MdEmojiPeople}
          tables={other}
          onAddComponent={onAddComponent}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 py-2 px-4 flex items-center">
        <button
          onClick={() => fileInputRef.current.click()}
          className="flex items-center justify-center gap-5 py-1 px-4 border-2 border-white hover:bg-white hover:text-blue-950 rounded-md bg-blue-950 text-white"
        >
          <RiUpload2Line className="w-5 h-5" />
          <p className="text-[14px] font-bold">Upload Background Image</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;