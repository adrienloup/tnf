import { NavigationComponent } from "@/src/generic/components/navigation/Navigation.component";
import styles from "@/src/generic/components/header/Header.module.scss";

export const HeaderComponent = () => {
  return (
    <header className={styles.header} role="banner">
      <NavigationComponent />
    </header>
  );
};
