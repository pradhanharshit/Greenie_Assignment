"use client";
import React, { useState } from "react";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = () => {
    setUsername("");
    setPassword("");
    if (username === "test" && password === "test123") {
      setTimeout(() => {
        setSuccess(true);
      }, 1000);
    }
  };
  return (
    <div className="text-center mt-5">
      <p className="font-bold text-xl">Add User</p>
      <div className="text-center border-2 border-black m-5 p-5">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username"
          className="border-2 border-black rounded-md p-1 mb-2"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          className="border-2 border-black rounded-md p-1"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button
          className="p-1.5 rounded-md text-white mt-3"
          style={{ backgroundColor: "#7CD855" }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>

        {success && (
          <div className="text-center">
            <p
              className="p-1.5 rounded-md w-max text-white text"
              style={{ backgroundColor: "#7CD855" }}
            >
              User Added
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
