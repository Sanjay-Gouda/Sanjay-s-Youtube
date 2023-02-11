import React from "react";

function TagList({ name }) {
  return (
    <div>
      <button className="px-4 py-1 m-2 rounded-lg bg-gray-300">{name}</button>
    </div>
  );
}

export default TagList;
