import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Head, Link, useForm } from "@inertiajs/react";

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleLogin = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
            onError: (loginErrors) => {
                setError("Login failed. Please check your credentials.");
            },
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <img src="images/logo.png" alt="" />
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    {error && <p style={styles.error}>{error}</p>}
                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        style={styles.input}
                    />
                    <button
                        type="submit"
                        style={styles.button}
                        disabled={processing}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ff8c1a",
    },
    loginBox: {
        width: "500px",
        padding: "80px 40px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center",
    },
    title: {
        fontSize: "1.8rem",
        color: "#333",
        marginBottom: "20px",
        marginTop: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "10px",
        margin: "10px 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    button: {
        padding: "10px",
        borderRadius: "4px",
        backgroundColor: "#ff8c1a",
        color: "#fff",
        fontSize: "1rem",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    error: {
        color: "red",
        marginBottom: "10px",
    },
};

export default Login;
