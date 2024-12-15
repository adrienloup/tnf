import { useTranslation } from "react-i18next";
import { version } from "@/package.json";
import styles from "./Footer.module.scss";

export const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.version}>
        {t("generic.sign")} {version}
      </div>
    </footer>
  );
};
