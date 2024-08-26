import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import Elements from './Elements';

const Canvas = ({ selectedComponents }) => {
  const [boxes, setBoxes] = useState(
    selectedComponents.map((component, index) => ({
      id: `component-${index}`,
      image: component,
      x: 200, // Initial X position
      y: 200, // Initial Y position
    }))
  );

  const handleDragEnd = (event) => {
    const { active, delta } = event;
    
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === active.id
          ? { ...box, x: box.x + delta.x, y: box.y + delta.y }
          : box
      )
    );
  };

  return (
    <div className="h-full w-full bg-[#f89c9c]">
      <h1>This is canvas</h1>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="relative w-full h-full">
          {boxes.map((box) => (
            <Elements
              key={box.id}
              id={box.id}
              image={box.image}
              initialPosition={{ x: box.x, y: box.y }}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default Canvas;
