import React, { useState } from "react";
import axios from "axios";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9000/user/", {
        username: name,
        email: email,
        phone: phone,
      });

      setName("");
      setEmail("");
      setPhone("");

      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error creating user. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.heading}>Create User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label><br /><br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label><br /><br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>
              Phone:
            </label><br /><br />
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0", // Light gray background
    color: "#333", // Dark text color
    fontFamily: "Arial, sans-serif",
  },
  formCard: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "10px", // Slightly rounder corners
    backgroundColor: "#fff", // White background for form card
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Soft shadow
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem", // Larger heading font size
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#007bff", // Blue heading color
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Increased spacing between form elements
  },
  formGroup: {
    marginBottom: "20px", // Increased margin bottom for form groups
  },
  label: {
    fontSize: "1.2rem", // Larger label font size
    color: "#555", // Dark label color
  },
  input: {
    padding: "14px",
    fontSize: "1.2rem", // Larger input font size
    borderRadius: "6px", // Rounder input corners
    border: "1px solid #ddd", // Light border around inputs
    backgroundColor: "#f5f5f5", // Light gray background for inputs
    color: "#333",
    width: "100%",
    boxSizing: "border-box", // Ensure padding and border are included in width
  },
  button: {
    padding: "14px",
    fontSize: "1.2rem", // Larger button font size
    backgroundColor: "#28a745", // Green button color
    color: "#fff", // White button text color
    border: "none",
    borderRadius: "6px", // Rounder button corners
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
};

// Add hover effect
styles.button[':hover'] = {
  backgroundColor: "#218838", // Darker green on hover
};

// Add click effect
styles.button[':active'] = {
  transform: "scale(0.95)", // Slightly shrink the button on click
};


export default CreateUserForm;
