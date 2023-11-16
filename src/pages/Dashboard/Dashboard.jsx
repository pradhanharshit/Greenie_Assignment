import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import TabButtons from "@/components/TabButtons/TabButtons";
import UsersTable from "@/components/UsersTable/UsersTable";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <TabButtons />
      <SearchBar />
      <UsersTable />
    </div>
  );
};

export default Dashboard;
