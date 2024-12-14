import { lazy, Suspense } from "react";
import { fallback } from "@/src/generic/utils/fallback";
import { LoaderComponent } from "@/src/generic/components/loader/Loader.component";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import { ArticleComponent } from "@/src/generic/components/article/Article.component";
import { AsideComponent } from "@/src/generic/components/aside/Aside.component";
import styles from "./Game.module.scss";

const DashboardComponent = lazy(() =>
  fallback(import("@/src/game/components/dashboard/Dashboard.component"), 6e2)
);

const GiftsComponent = lazy(() =>
  fallback(import("@/src/game/components/gifts/Gifts.component"), 4e2)
);

function GamePage() {
  return (
    <PageComponent>
      <ArticleComponent>
        <Suspense
          fallback={
            <LoaderComponent className={styles.loader} duration="6e2" />
          }
        >
          <DashboardComponent />
        </Suspense>
      </ArticleComponent>
      <AsideComponent>
        <Suspense
          fallback={
            <LoaderComponent className={styles.loader} duration="4e2" />
          }
        >
          <GiftsComponent />
        </Suspense>
      </AsideComponent>
    </PageComponent>
  );
}

export default GamePage;
