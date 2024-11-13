import React from "react";
import Layout from "../Components/Layout";

const Welcome = () => {
    return (
        <Layout>
            <div style={styles.container}>
                <section style={styles.hero}>
                    <h2 style={styles.heroTitle}>Welcome to WebifyIQ...</h2>
                    <img
                        src="/images/burger.png"
                        alt="Burger"
                        style={styles.heroImage}
                    />
                </section>
                <section style={styles.features}>
                    <div style={styles.feature}>
                        <h2 style={styles.featureTitle}>Order Management</h2>
                        <p style={styles.featureText}>
                            Easily manage orders and track customer requests.
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <h2 style={styles.featureTitle}>Menu Control</h2>
                        <p style={styles.featureText}>
                            Add, update, or remove menu items effortlessly.
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <h2 style={styles.featureTitle}>User Permissions</h2>
                        <p style={styles.featureText}>
                            Control access levels with secure user permissions.
                        </p>
                    </div>
                </section>
                <section style={styles.howItWorks}>
                    <h2 style={styles.sectionTitle}>How It Works</h2>
                    <p style={styles.sectionText}>
                        WebifyIQ helps streamline restaurant operations from the
                        kitchen to the front-of-house. Whether you're managing
                        orders, customizing the menu, or handling staff roles,
                        our platform makes it easy for you to stay organized and
                        provide the best service.
                    </p>
                </section>
                <section style={styles.whyChooseUs}>
                    <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
                    <p style={styles.sectionText}>
                        WebifyIQ is designed for simplicity and scalability.
                        Whether you're running a small diner or a large
                        restaurant chain, our system grows with you. Trusted by
                        thousands of businesses, our platform offers
                        reliability, security, and user-friendly features.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff5e6", // light orange background
        color: "#ff8c1a", // orange text
        padding: "20px",
        textAlign: "center",
    },
    header: {
        marginBottom: "20px",
    },
    logo: {
        width: "150px",
        marginBottom: "20px",
    },
    title: {
        fontSize: "2.5rem",
        color: "#ff8c1a",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "1.2rem",
        color: "#333",
    },
    hero: {
        backgroundColor: "#fff",
        padding: "30px",
        marginBottom: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heroTitle: {
        fontSize: "2rem",
        color: "#ff8c1a",
        marginBottom: "10px",
    },
    heroImage: {
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        marginTop: "20px",
    },
    features: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "20px",
    },
    feature: {
        maxWidth: "250px",
        margin: "10px",
        padding: "15px",
        backgroundColor: "#fff",
        border: "2px solid #ff8c1a",
        borderRadius: "10px",
    },
    featureTitle: {
        fontSize: "1.5rem",
        color: "#ff8c1a",
        marginBottom: "10px",
    },
    featureText: {
        fontSize: "1rem",
        color: "#333",
    },
    howItWorks: {
        backgroundColor: "#fff",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    whyChooseUs: {
        backgroundColor: "#fff",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    sectionTitle: {
        fontSize: "1.8rem",
        color: "#ff8c1a",
        marginBottom: "10px",
    },
    sectionText: {
        fontSize: "1rem",
        color: "#333",
    },
    footer: {
        marginTop: "30px",
        fontSize: "1rem",
        color: "#666",
    },
    footerButton: {
        padding: "10px 20px",
        fontSize: "1rem",
        backgroundColor: "#ff8c1a",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    footerButtonHover: {
        backgroundColor: "#e77a00",
    },
};

export default Welcome;
