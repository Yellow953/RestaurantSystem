import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get("/api/manage/orders")
            .then((response) => setOrders(response.data))
            .catch((error) => console.error(error));
    }, []);

    const updateOrderStatus = (orderId, status) => {
        axios
            .put(`/api/manage/orders/${orderId}`, { status })
            .then((response) => {
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order.id === orderId
                            ? { ...order, status: response.data.status }
                            : order
                    )
                );
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Manage Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order #{order.id} - Status: {order.status}
                        <button
                            onClick={() =>
                                updateOrderStatus(order.id, "approved")
                            }
                        >
                            Approve
                        </button>
                        <button
                            onClick={() =>
                                updateOrderStatus(order.id, "declined")
                            }
                        >
                            Decline
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderManagement;
