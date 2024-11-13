import React, { useEffect, useState } from "react";
import axios from "axios";

const Burgers = () => {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        axios
            .get("/api/burgers")
            .then((response) => setBurgers(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Burgers Menu</h1>
            <ul>
                {burgers.map((burger) => (
                    <li key={burger.id}>
                        {burger.name} - ${burger.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Burgers;
