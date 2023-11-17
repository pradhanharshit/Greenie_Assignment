"use client";
import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import UsersData from "../../Data/UsersData.json";
import SearchBar from "../SearchBar/SearchBar";
import UserModal from "../UserModal/UserModal";

const TABLE_HEAD = ["Username", "Email", "Phone", "ID", "Creation Date"];

const UsersTable = () => {
  const [usersData, setUsersData] = useState(UsersData);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const temp = [...UsersData];
    setUsersData(
      temp.filter((userData) => {
        return (
          userData.firstName.toLowerCase().includes(search) ||
          userData.lastName.toLowerCase().includes(search) ||
          userData.email.toLowerCase().includes(search) ||
          userData.phone.includes(search)
        );
      })
    );
  }, [search]);

  return (
    <>
      {openModal && <UserModal user={user} setOpenModal={setOpenModal} />}
      <SearchBar search={search} setSearch={setSearch} />
      <div className="p-10">
        <Card className="h-[400px] w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="sticky top-0 bg-white">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {usersData?.map((userData, index) => {
                const isLast = index === usersData?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <>
                    <tr
                      key={index}
                      onClick={() => {
                        setUser(userData);
                        setOpenModal(!openModal);
                      }}
                    >
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {userData.firstName + " " + userData.lastName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {userData.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {userData.phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {userData.id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {userData.creationDate}
                        </Typography>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default UsersTable;
