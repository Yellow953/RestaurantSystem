import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get("/api/orders")
            .then((response) => setOrders(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Your Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order #{order.id} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
