import { useTranslation } from "react-i18next";
import styles from "./Nails.module.scss";

export const NailsComponent = () => {
  const { t } = useTranslation();

  return (
    <h1 className={styles.nails}>
      {t("game.title")} <span>10000</span>
    </h1>
  );
};
