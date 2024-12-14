import { useTranslation } from "react-i18next";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import { ArticleComponent } from "@/src/generic/components/article/Article.component";
import { AsideComponent } from "@/src/generic/components/aside/Aside.component";
import { CardsComponent } from "@/src/generic/components/cards/Cards.component";
import { ManufacturingComponent } from "@/src/game/manufacturing/Manufacturing.component";
import { BusinessComponent } from "@/src/game/business/Business.component";
import styles from "./Game.module.scss";

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <ArticleComponent>
        <h1>1,000,000,000,000,000,000,000</h1>
        {t("game.title")}
        <div className={styles.tutu}>
          <div className={styles.column}>
            <ManufacturingComponent />
            <ManufacturingComponent />
          </div>
          <div className={styles.column}>
            <BusinessComponent />
          </div>
          <div className={styles.column}>
            <BusinessComponent />
          </div>
        </div>
        <CardsComponent>
          <ManufacturingComponent />
          <BusinessComponent />
        </CardsComponent>
      </ArticleComponent>
      <AsideComponent />
    </PageComponent>
  );
}

export default GamePage;
