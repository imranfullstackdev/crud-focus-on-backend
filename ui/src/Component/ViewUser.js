import React, { useState, useEffect } from "react";
import EditUser from "./EditUser";

const ViewUser = () => {
  const [allUser, setAllUser] = useState([]);
  async function alldata() {
    const allData = await fetch(`http://localhost:8000/api/v1/get`);
    const response = await allData.json();
    setAllUser(response);
    // console.log(allData);
  }
  useEffect(() => {
    alldata();
  }, []);
  const DeleteUser = async (id) => {
    const deleteUser = await fetch(
      `http://localhost:8000/api/v1/delete/${id}`,
      {
        method: "Delete",
      }
    );
    console.log("deleted sucessfully");
  };
  //   console.log(allUser);
  return (
    <>
      <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>password</th>
        </tr>
        {allUser.map((map) => {
          return (
            <tr key={map.id}>
              <td>{map.name}</td>
              <td>{map.email}</td>
              <td>{map.password}</td>
              <td>
                <EditUser props={map} />
              </td>
              <button onClick={() => DeleteUser(map.id)}>DELETE</button>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default ViewUser;
