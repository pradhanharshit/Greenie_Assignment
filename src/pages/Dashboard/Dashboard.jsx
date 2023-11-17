import AddUser from "@/components/AddUser/AddUser";
import Navbar from "@/components/Navbar/Navbar";
import UsersTable from "@/components/UsersTable/UsersTable";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <AddUser />
      <UsersTable />
    </div>
  );
};

export default Dashboard;
