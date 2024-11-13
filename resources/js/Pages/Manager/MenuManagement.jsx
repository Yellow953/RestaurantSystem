import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuManagement = () => {
    const [burgers, setBurgers] = useState([]);
    const [newBurger, setNewBurger] = useState({ name: "", price: "" });

    useEffect(() => {
        axios
            .get("/api/burgers")
            .then((response) => setBurgers(response.data))
            .catch((error) => console.error(error));
    }, []);

    const addBurger = () => {
        axios
            .post("/api/burgers", newBurger)
            .then((response) => {
                setBurgers([...burgers, response.data]);
                setNewBurger({ name: "", price: "" });
            })
            .catch((error) => console.error(error));
    };

    const deleteBurger = (burgerId) => {
        axios
            .delete(`/api/burgers/${burgerId}`)
            .then(() => {
                setBurgers(burgers.filter((burger) => burger.id !== burgerId));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Manage Menu</h1>
            <ul>
                {burgers.map((burger) => (
                    <li key={burger.id}>
                        {burger.name} - ${burger.price}
                        <button onClick={() => deleteBurger(burger.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Add New Burger</h2>
            <input
                type="text"
                placeholder="Burger Name"
                value={newBurger.name}
                onChange={(e) =>
                    setNewBurger({ ...newBurger, name: e.target.value })
                }
            />
            <input
                type="number"
                placeholder="Price"
                value={newBurger.price}
                onChange={(e) =>
                    setNewBurger({ ...newBurger, price: e.target.value })
                }
            />
            <button onClick={addBurger}>Add Burger</button>
        </div>
    );
};

export default MenuManagement;
