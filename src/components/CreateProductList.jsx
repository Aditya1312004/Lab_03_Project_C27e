import React, { useState } from "react";
import axios from "axios";

const CreateProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9000/product/", {
        name: name,
        price: price,
      });

      setName("");
      setPrice("");

      alert("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error creating product. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create Product</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
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
            <label htmlFor="price" style={styles.label}>
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Create Product
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
    backgroundColor: "#f8f9fa", // Lighter background color
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff", // White background for card
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Box shadow for card
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem", // Larger font size for heading
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "2px",
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
    fontSize: "1.2rem", // Larger font size for labels
    color: "#666", // Darker label color
  },
  input: {
    padding: "14px", // Slightly increased input padding
    fontSize: "1.2rem", // Larger font size for inputs
    borderRadius: "6px", // Rounder input corners
    border: "1px solid #ddd", // Light border around inputs
    backgroundColor: "#f5f5f5", // Lighter background color for inputs
    color: "#333",
    width: "100%",
    boxSizing: "border-box", // Ensure padding and border are included in width
  },
  button: {
    padding: "14px", // Slightly increased button padding
    fontSize: "1.2rem", // Larger font size for button text
    backgroundColor: "#17a2b8", // Turquoise button color
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
};

// Add hover effect
styles.button[':hover'] = {
  backgroundColor: "#138496", // Darker turquoise on hover
};

// Add click effect
styles.button[':active'] = {
  transform: "scale(0.95)", // Slightly shrink the button on click
};

export default CreateProductForm;
