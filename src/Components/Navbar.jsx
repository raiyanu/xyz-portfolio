import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.websiteName}>Ray-dev</h1>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Others</a>
          <a href="#">About</a>
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
