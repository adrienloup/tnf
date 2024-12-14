import { useTranslation } from "react-i18next";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import styles from "@/src/game/Game.module.scss";

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <div className={styles.article}>
        <div className={styles.title1}>{t("page.game.title")}</div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.inner}>sidebar</div>
      </div>
    </PageComponent>
  );
}

export default GamePage;
