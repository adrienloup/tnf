import { version } from "@/package.json";
import { useLanguage } from "@/src/generic/language/useLanguage";
import styles from "./Footer.module.scss";

export const FooterComponent = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLocal = () => setLanguage(language === "fr" ? "en" : "fr");

  return (
    <footer className={styles.footer} role="contentinfo">
      <button onClick={toggleLocal}>{language === "fr" ? "EN" : "FR"}</button>
      tnf v{version}
    </footer>
  );
};
