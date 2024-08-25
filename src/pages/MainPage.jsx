import React from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const MainPage = () => {
  return (
    <div className="h-full w-full mt-0">
      <div className="fixed top-0 left-0">
        {/* Menu Bar */}
        <div className="w-screen bg-gray-300">
          <TopBar />
        </div>
        <div className="h-screen bg-gray-300 w-80">
            <SideBar/>

        </div>
      </div>
      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default MainPage;
