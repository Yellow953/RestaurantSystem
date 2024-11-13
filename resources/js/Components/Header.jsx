import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img
                    src="/images/logo.png"
                    alt="WebifyIQ Logo"
                    style={styles.logo}
                />
            </div>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link to="/" style={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/burgers" style={styles.navLink}>
                            Burgers
                        </Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/orders" style={styles.navLink}>
                            Orders
                        </Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/account" style={styles.navLink}>
                            Account
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#ff8c1a",
        color: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        width: "250px",
        marginRight: "10px",
    },
    title: {
        fontSize: "1.8rem",
        fontWeight: "bold",
    },
    nav: {
        flexGrow: 1,
        textAlign: "right",
    },
    navList: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "flex-end",
    },
    navItem: {
        marginLeft: "20px",
    },
    navLink: {
        textDecoration: "none",
        color: "white",
        fontSize: "1.1rem",
        fontWeight: "500",
        transition: "color 0.3s",
    },
    navLinkHover: {
        color: "#333",
    },
};

export default Header;
