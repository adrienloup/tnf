import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { fallback } from "@/src/generic/utils/fallback";
import { useNotification } from "@/src/game/components/notification/useNotification";
import { LoaderComponent } from "@/src/generic/components/loader/Loader.component";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import { ArticleComponent } from "@/src/generic/components/article/Article.component";
import { AsideComponent } from "@/src/generic/components/aside/Aside.component";
import { ManufacturingComponent } from "@/src/game/components/manufacturing/Manufacturing.component";
import { BusinessComponent } from "@/src/game/components/business/Business.component";
import styles from "./Game.module.scss";

const NotificationsComponent = lazy(() =>
  fallback(
    import("@/src/game/components/notification/Notifications.component"),
    5e2,
  ),
);

function GamePage() {
  const { t } = useTranslation();
  const { addNotification } = useNotification();

  const onClick = () =>
    addNotification({ id: "1", title: "1111111", content: "tata" });
  const onClick2 = () =>
    addNotification({ id: "2", title: "222222", content: "uuuuu" });

  return (
    <PageComponent>
      <ArticleComponent>
        <h1>1,000,000,000,000,000,000,000</h1>
        {t("game.title")}
        <button onClick={onClick}>add notification1</button>
        <button onClick={onClick2}>add notification2</button>
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
      </ArticleComponent>
      <AsideComponent>
        <Suspense
          fallback={
            <LoaderComponent className={styles.loader} duration="5e2" />
          }
        >
          <NotificationsComponent />
        </Suspense>
      </AsideComponent>
    </PageComponent>
  );
}

export default GamePage;
