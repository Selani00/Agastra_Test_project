import React from 'react'
import { useDraggable } from '@dnd-kit/core';


const Elements = ({ id, initialPosition }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
      });
    
      const style = {
        position: 'absolute',
        top: `${initialPosition.y}px`,
        left: `${initialPosition.x}px`,
        transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        touchAction: 'none',
      };
    
      return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
          {id}
        </div>
      );
}

export default Elements
