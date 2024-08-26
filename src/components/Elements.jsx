import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Elements = ({ id, image, initialPosition }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  // The current position is the initial position plus the transform from the drag
  const style = {
    transform: `translate3d(${initialPosition.x + (transform?.x || 0)}px, ${
      initialPosition.y + (transform?.y || 0)
    }px, 0)`,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="absolute"
    >
      <img src={image} alt="element" className="w-20 h-20" />
    </div>
  );
};

export default Elements;
