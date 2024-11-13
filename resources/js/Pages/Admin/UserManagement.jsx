import React, { useEffect, useState } from "react";
import axios from "axios";

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("/api/manage/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.error(error));
    }, []);

    const updateUserRole = (userId, role) => {
        axios
            .put(`/api/manage/users/${userId}`, { role })
            .then((response) => {
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === userId
                            ? { ...user, role: response.data.role }
                            : user
                    )
                );
            })
            .catch((error) => console.error(error));
    };

    const deleteUser = (userId) => {
        axios
            .delete(`/api/manage/users/${userId}`)
            .then(() => {
                setUsers(users.filter((user) => user.id !== userId));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Manage Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - Role: {user.role}
                        <button
                            onClick={() => updateUserRole(user.id, "manager")}
                        >
                            Set as Manager
                        </button>
                        <button
                            onClick={() => updateUserRole(user.id, "customer")}
                        >
                            Set as Customer
                        </button>
                        <button onClick={() => deleteUser(user.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
