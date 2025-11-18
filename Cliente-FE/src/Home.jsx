import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.get("/users").then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <div>
            <h1>Lista de usuarios</h1>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.email}</li>
                ))}
            </ul>
        </div>
    );
}
