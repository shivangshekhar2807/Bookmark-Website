// src/components/Background/BackgroundStyle.jsx
import React from "react";
import { Navbar, Container } from "react-bootstrap";

function BackgroundStyle() {
  return (
    <Navbar
      style={{
        backgroundColor: "#343a40", // Dark gray background
        margin: "0", // Remove any margin
        padding: "0", // Remove extra padding if needed
      }}
      variant="dark"
      className="shadow-sm w-100 position-absolute top-0 start-0"
    >
      <Container fluid className="p-2 d-flex justify-content-center">
        {/* Header Logo with Centered Title */}
        <div className="d-flex align-items-center">
          {/* Logo Placeholder */}
          <div
            className="bg-light rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
            }}
          ></div>

          {/* Header Title (No Link, Centered) */}
          <span className="fw-bold fs-4 text-white">Bookmark Website</span>
        </div>
      </Container>
    </Navbar>
  );
}

export default BackgroundStyle;
