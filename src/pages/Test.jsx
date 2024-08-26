import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { MainMenu } from "@excalidraw/excalidraw";

const Test = () => {
  return (
    <div className="h-screen">
      <div style={{ height: "500px" }}>
        <Excalidraw>
          <MainMenu>
            <MainMenu.ItemLink href="https://google.com">
              Google
            </MainMenu.ItemLink>
            <MainMenu.ItemLink href="https://excalidraw.com">
              Excalidraw
            </MainMenu.ItemLink>
          </MainMenu>
          {/* Hide library menu button */}
          
        </Excalidraw>
      </div>
    </div>
  );
};

export default Test;


// import React, { useState } from 'react';
// import Excalidraw from '@excalidraw/excalidraw';
// import GridPopup from '../components/PopUp';
// import { FaTableCells } from "react-icons/fa6";
// import { IoIosArrowDropdown } from "react-icons/io";

// const Test = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [excalidrawRef, setExcalidrawRef] = useState(null);

//   const handleCreateGrid = (rows, columns) => {
//     if (!excalidrawRef) return;

//     const elements = [];
//     const cellWidth = 100;
//     const cellHeight = 100;
//     const startX = 50;
//     const startY = 50;

//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < columns; col++) {
//         elements.push({
//           type: 'rectangle',
//           x: startX + col * cellWidth,
//           y: startY + row * cellHeight,
//           width: cellWidth,
//           height: cellHeight,
//           strokeColor: '#000000',
//           backgroundColor: 'transparent',
//           strokeWidth: 1,
//           groupIds: [],
//           boundElements: null,
//           version: 1,
//           versionNonce: Math.random(),
//           isDeleted: false,
//           id: `rect-${row}-${col}`,
//           seed: Math.random(),
//           angle: 0,
//         });
//       }
//     }

//     excalidrawRef.updateScene({
//       elements: excalidrawRef.getSceneElements().concat(elements),
//     });

//     setIsPopupOpen(false);
//   };

//   return (
//     <div className="h-screen">
//       <div style={{ height: '500px' }}>
//         <button
//           className="flex items-center gap-2 bg-blue-950 hover:bg-white hover:text-blue-950 border-blue-950 border-2 text-white p-2 rounded-md transition duration-300"
//           onClick={() => setIsPopupOpen(true)}
//         >
//           <FaTableCells className="w-6 h-6" />
//           <IoIosArrowDropdown className="w-5 h-5 hover:translate-y-2 transition duration-400" />
//         </button>

//         {isPopupOpen && <GridPopup onConfirm={handleCreateGrid} />}

//         <Excalidraw
//           ref={(ref) => setExcalidrawRef(ref)}
//           initialData={{ appState: { gridSize: 20 } }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Test;

