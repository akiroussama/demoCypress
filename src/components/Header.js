import React from "react";
import styles from "./Header.module.scss";

// Current date at the top of the page
function Header() {

  return (
    <header class={styles.header}>
     🌄 Daily Todo List 
    </header>
  );
}

export default Header;
