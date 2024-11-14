import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BurgerDetails = () => {
    const { id } = useParams();
    const [burger, setBurger] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttr;

    useEffect(() => {
        fetch(`http://localhost:8000/api/burgers/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setBurger(data))
            .catch((error) =>
                console.error("Error fetching burger details:", error)
            );
    }, [id]);

    const handleOrder = () => {
        fetch("http://localhost:8000/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({
                items: [{ burger_id: burger.id, quantity: parseInt(quantity) }],
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to create order");
                }
                return response.json();
            })
            .then((data) => {
                setSuccess(true);
                setError(null);
                console.log("Order created successfully:", data);
            })
            .catch((error) => {
                setError("Failed to create order. Please try again.");
                setSuccess(false);
                console.error("Error creating order:", error);
            });
    };

    return (
        <div style={styles.container}>
            {burger ? (
                <div style={styles.detailsBox}>
                    <img
                        src={`../${burger.image}`}
                        alt={burger.name}
                        style={styles.image}
                    />
                    <h1 style={styles.title}>{burger.name}</h1>
                    <p style={styles.description}>{burger.description}</p>
                    <p style={styles.price}>Price: ${burger.price}</p>
                    <div style={styles.quantityContainer}>
                        <label style={styles.quantityLabel}>Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <button onClick={handleOrder} style={styles.button}>
                        Order Now
                    </button>
                    {success && (
                        <p style={styles.success}>Order placed successfully!</p>
                    )}
                    {error && <p style={styles.error}>{error}</p>}
                </div>
            ) : (
                <p>Loading burger details...</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
    },
    detailsBox: {
        maxWidth: "600px",
        width: "100%",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        marginBottom: "20px",
        objectFit: "cover",
    },
    title: {
        fontSize: "2rem",
        color: "#333",
        marginBottom: "10px",
    },
    description: {
        fontSize: "1.1rem",
        color: "#666",
        marginBottom: "20px",
    },
    price: {
        fontSize: "1.5rem",
        color: "#ff8c1a",
        marginBottom: "20px",
    },
    quantityContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
    },
    quantityLabel: {
        fontSize: "1.1rem",
        marginRight: "10px",
        color: "#333",
    },
    input: {
        padding: "8px",
        width: "70px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    button: {
        padding: "12px 24px",
        backgroundColor: "#ff8c1a",
        color: "#fff",
        fontSize: "1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    success: {
        color: "green",
        marginTop: "20px",
    },
    error: {
        color: "red",
        marginTop: "20px",
    },
};

export default BurgerDetails;
