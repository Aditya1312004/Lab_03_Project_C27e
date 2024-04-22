import React, { useState } from "react";
import axios from "axios";

function UpdateUserForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:9000/user/${username}`, {
        username: username,
        email: email,
        phone: phone,
      });

      setUsername("");
      setEmail("");
      setPhone("");

      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Update User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
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
            </label>
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
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa", // Light background color
    color: "#333", // Dark text color
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px", // Increased padding for the card
    borderRadius: "10px", // Rounded corners for the card
    backgroundColor: "#fff", // White background
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Soft shadow
    boxSizing: "border-box", // Include padding in width
  },
  heading: {
    fontSize: "2.5rem", // Larger heading font size
    marginBottom: "30px", // Increased margin bottom for the heading
    textAlign: "center",
    color: "#007bff", // Blue heading color
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Spacing between form elements
  },
  formGroup: {
    marginBottom: "20px", // Increased margin bottom for form groups
  },
  label: {
    fontSize: "1.2rem", // Larger label font size
    color: "#555", // Dark label color
    marginBottom: "8px",
  },
  input: {
    padding: "14px", // Increased input padding
    fontSize: "1.2rem", // Larger input font size
    borderRadius: "6px", // Rounded input corners
    border: "1px solid #ccc", // Light border
    backgroundColor: "#f5f5f5", // Light gray background
    color: "#333",
    width: "100%",
    boxSizing: "border-box", // Include padding and border in width
  },
  button: {
    padding: "14px", // Increased button padding
    fontSize: "1.2rem", // Larger button font size
    backgroundColor: "#28a745", // Green button color
    color: "#fff", // White button text color
    border: "none",
    borderRadius: "6px", // Rounded button corners
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
};

// Add hover effect
styles.button[":hover"] = {
  backgroundColor: "#218838", // Darker green on hover
};

// Add click effect
styles.button[":active"] = {
  transform: "scale(0.95)", // Slightly shrink the button on click
};

export default UpdateUserForm;
