import React, { useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Canvas from "../components/Canvas";
import Test from "./Test";

const MainPage = () => {
  const [selectedComponents, setSelectedComponents] = useState([]);

  const handleAddComponent = (component) => {
    setSelectedComponents((prev) => [...prev, component]);
  };

  return (
    <div className="h-full w-full mt-0">
      <div className="fixed top-0 left-0">
        <div className="w-screen bg-gray-300">
          <TopBar />
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="h-screen bg-gray-300 w-140">
            <SideBar onAddComponent={handleAddComponent} />
          </div>
          <div className="h-screen w-full">
            <Test/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
