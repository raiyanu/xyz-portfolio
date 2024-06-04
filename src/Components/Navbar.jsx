import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.websiteName}>
          <img src="/icon.svg" alt="favicon" />
          Ray-dev
        </a>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#others">Others</a>
          <a href="#about">About</a>
        </nav>
        <div className={styles.action}>
          <button>Click me</button>
          <button>Click me</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
