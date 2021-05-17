import React from "react";
import axios from "axios";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { selectUsers, setUsers } from "../../../redux/usersSlice";

import {
  getAllUsers,
  updateUserById,
  deleteUserById,
} from "../../../apis/urls";

function ManageUser() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const loadUsers = () => {
    axios
      .get(getAllUsers)
      .then((res) => {
        const users = res.data.filter((t, i) => t.role !== "ROLE_ADMIN");

        dispatch(setUsers(users));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!users) {
    loadUsers();
  }

  const handleStatus = (email, status) => {
    const filterUser = users.filter((t, i) => t.email === email);

    const updatedUser = {
      name: filterUser[0].name,
      email: filterUser[0].email,
      phone: filterUser[0].phone,
      username: filterUser[0].username,
      password: filterUser[0].password,
      role: filterUser[0].role,
      rating: filterUser[0].rating,
      status: status,
    };

    axios
      .put(updateUserById + email, updatedUser)
      .then((res) => console.log(res))
      .catch((err) => alert(err));

    loadUsers();
  };

  const handleDelete = (email) => {
    axios
      .delete(deleteUserById + email)
      .then((res) => {
        loadUsers();
      })
      .catch((err) => alert("Error while deleting user"));
  };

  if (!users) {
    return <h2>No Users found</h2>;
  }
  return (
    <div>
      <table className="users--table">
        <thead>
          <th className="table--heading">Email</th>
          <th className="table--heading">Name</th>
          <th className="table--heading">Phone</th>
          <th className="table--heading">Rating</th>
          <th className="table--heading">Status</th>
          <th className="table--heading">Activate/Deactivate</th>
          <th className="table--heading">Delete</th>
        </thead>
        <tbody>
          {users.map((value, i) => {
            return (
              <tr className="table--body" key={i}>
                <td>{value.email}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
                <td>{value.rating}</td>
                <td>{value.status ? "Active" : "Inactive"}</td>
                <td>
                  {value.status ? (
                    <button
                      onClick={(e) => {
                        handleStatus(value.email, false);
                      }}
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handleStatus(value.email, true);
                      }}
                    >
                      Activate
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      handleDelete(value.email);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUser;
