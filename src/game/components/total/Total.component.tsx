import { useTranslation } from "react-i18next";
import { useGame } from "@/src/game/useGame";
import styles from "./Total.module.scss";

export const TotalComponent = () => {
  const { t } = useTranslation();
  const { total } = useGame();

  return (
    <h1 className={styles.total}>
      {t("game.title")} {total}
    </h1>
  );
};
