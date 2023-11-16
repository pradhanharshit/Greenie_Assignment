import React from "react";

const TabButtons = () => {
  return (
    <div className="text-center m-5 font-bold">
      <button
        className="p-3 rounded-lg mr-5"
        style={{ backgroundColor: "#7CD855" }}
      >
        Add User
      </button>
      <button className="p-3 rounded-lg" style={{ backgroundColor: "#7CD855" }}>
        User Details
      </button>
    </div>
  );
};

export default TabButtons;
