import { version } from "@/package.json";
import { useLanguage } from "@/src/generic/language/useLanguage";
import { useTheme } from "@/src/generic/theme/useTheme";
import { Theme } from "@/src/generic/theme/Theme.type";
import styles from "./Footer.module.scss";

export const FooterComponent = () => {
  const { language, setLanguage } = useLanguage();
  const { setTheme } = useTheme();

  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");

  const changeTheme = (theme: Theme) => setTheme(theme);

  return (
    <footer className={styles.footer} role="contentinfo">
      <button onClick={toggleLanguage}>
        {language === "fr" ? "EN" : "FR"}
      </button>
      <button onClick={() => changeTheme("dark")}>dark</button>
      <button onClick={() => changeTheme("light")}>light</button>
      <button onClick={() => changeTheme("system")}>system</button>
      <div className={styles.version}>tnf v{version}</div>
    </footer>
  );
};
