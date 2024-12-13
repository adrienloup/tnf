import { Link } from "react-router-dom";
import styles from "@/src/generic/components/header/Header.module.scss";

export const HeaderComponent = () => {
  return (
    <header className={styles.header} role="banner">
      <Link to="/tnf">Game</Link>
      <Link to="/tnf/setup">Setup</Link>
    </header>
  );
};
