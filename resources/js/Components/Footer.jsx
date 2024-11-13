import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <p style={styles.footerText}>
                    © 2024 WebifyIQ. All rights reserved.
                </p>
                <div style={styles.footerLinks}>
                    <a href="/about" style={styles.footerLink}>
                        About Us
                    </a>
                    <a href="/contact" style={styles.footerLink}>
                        Contact
                    </a>
                    <a href="/privacy" style={styles.footerLink}>
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        textAlign: "center",
        position: "relative",
        bottom: "0",
        width: "100%",
    },
    footerContent: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
    },
    footerText: {
        fontSize: "1rem",
        marginBottom: "10px",
    },
    footerLinks: {
        marginTop: "10px",
    },
    footerLink: {
        textDecoration: "none",
        color: "#ff8c1a",
        fontSize: "1.1rem",
        marginLeft: "15px",
        transition: "color 0.3s",
    },
    footerLinkHover: {
        color: "#fff",
    },
};

export default Footer;
