import { closestCorners, DndContext } from '@dnd-kit/core'
import React,{useState} from 'react'
import Elements from './Elements'

const Canvas = () => {
    const [boxes, setBoxes] = useState([
        { id: 'box1', x: 50, y: 50 },
        { id: 'box2', x: 150, y: 150 },
      ]);

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
    <div className='h-full'>
      <h1>This is canvas</h1>
      <DndContext onDragEnd={handleDragEnd}>
      <div className='relative w-full h-full bg-[#f89c9c]' >
        {boxes.map((box) => (
          <Elements key={box.id} id={box.id} initialPosition={{ x: box.x, y: box.y }} />
        ))}
      </div>
    </DndContext>
    </div>
  )
}

export default Canvas
