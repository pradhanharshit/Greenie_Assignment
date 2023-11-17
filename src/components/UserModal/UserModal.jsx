import React from "react";
import "../UserModal/UserModal.css";

const UserModal = ({ user, setOpenModal }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container bg-white p-10 border-2 border-black rounded-md">
        <p>UserId: {user?.id}</p>
        <p>Username: {user?.firstName + " " + user?.lastName}</p>
        <p>Email: {user?.email}</p>
        <p>Phone: {user?.phone}</p>
        <p>Creation Date: {user?.creationDate}</p>

        <div className="flex justify-between items-center mt-3">
          <button
            className="p-1.5 rounded-md text-white"
            style={{ backgroundColor: "#7CD855" }}
          >
            Generate Report
          </button>

          <button
            className="p-1.5 rounded-md text-white bg-red-600"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default UserModal;
