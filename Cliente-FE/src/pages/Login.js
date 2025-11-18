import React, { useState } from "react";
import API from "../utils/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await API.post("/signin", { email, password });

            if (data.token) {
                localStorage.setItem("token", data.token);
                window.location.href = "/protected";
            }
        } catch (err) {
            console.error(err);
            setError("Credenciales incorrectas");
        }
    };

    return (
        <div>
            <h1>Iniciar sesión</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Ingresar</button>
            </form>
        </div>
    );
}
