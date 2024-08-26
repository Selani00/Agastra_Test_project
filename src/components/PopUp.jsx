import React, { useState } from 'react';
import { FaTableCells } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';

const GridPopup = ({ onConfirm }) => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Enter Rows and Columns</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Rows:</label>
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Columns:</label>
          <input
            type="number"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-950 text-white p-2 rounded-md"
            onClick={() => onConfirm(rows, columns)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridPopup;
