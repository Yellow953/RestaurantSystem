import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

const Burgers = () => {
    const [burgers, setBurgers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBurgers = async () => {
            try {
                const response = await axios.get("/api/burgers");
                setBurgers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching burgers:", error);
                setLoading(false);
            }
        };
        fetchBurgers();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <Layout>
            <div style={styles.container}>
                <h1 style={styles.title}>Our Menu</h1>
                <div style={styles.burgerList}>
                    {burgers.map((burger) => (
                        <div key={burger.id} style={styles.burgerItem}>
                            <Link
                                to={`/burgers/${burger.id}`}
                                key={burger.id}
                                style={styles.card}
                            >
                                <img
                                    src={burger.image}
                                    alt={burger.name}
                                    style={styles.burgerImage}
                                />
                                <h2 style={styles.burgerName}>{burger.name}</h2>
                                <p style={styles.burgerDescription}>
                                    {burger.description}
                                </p>
                                <p style={styles.burgerPrice}>
                                    ${burger.price}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

const styles = {
    container: {
        padding: "20px",
        backgroundColor: "#fff5e6",
        color: "#ff8c1a",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: "20px",
    },
    burgerList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    burgerItem: {
        width: "300px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#fff",
        border: "2px solid #ff8c1a",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    burgerImage: {
        width: "100%",
        height: "150px",
        borderRadius: "8px",
    },
    burgerName: {
        fontSize: "1.5rem",
        color: "#ff8c1a",
        margin: "10px 0",
    },
    burgerDescription: {
        fontSize: "1rem",
        color: "#333",
        marginBottom: "10px",
    },
    burgerPrice: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#333",
    },
};

export default Burgers;
