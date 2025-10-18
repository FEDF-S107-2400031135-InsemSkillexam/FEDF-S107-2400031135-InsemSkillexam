import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        transition: "0.3s",
      }}
    >
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#222" : "#fff",
          color: theme === "light" ? "#fff" : "#222",
          border: "none",
          transition: "0.3s",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
