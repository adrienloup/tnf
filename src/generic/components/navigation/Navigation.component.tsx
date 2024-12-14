import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const NavigationComponent = () => {
  return (
    <nav className={styles.navigation} role="navigation">
      <ul>
        <li>
          <Link to="/tnf">Game</Link>
        </li>
        <li>
          <Link to="/tnf/setup">Setup</Link>
        </li>
      </ul>
    </nav>
  );
};
