import { lazy, Suspense } from "react";
import { fallback } from "@/src/generic/utils/fallback";
import { NavigationComponent } from "@/src/generic/components/navigation/Navigation.component";
import { LoaderComponent } from "@/src/generic/components/loader/Loader.component";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import { ArticleComponent } from "@/src/generic/components/article/Article.component";
import { AsideComponent } from "@/src/generic/components/aside/Aside.component";
import styles from "./Game.module.scss";

const DashboardComponent = lazy(() =>
  fallback(import("@/src/game/components/dashboard/Dashboard.component"), 6e2),
);

const NotifsComponent = lazy(() =>
  fallback(import("@/src/game/components/notifs/Notifs.component"), 4e2),
);

function GamePage() {
  return (
    <PageComponent>
      <NavigationComponent />
      <ArticleComponent>
        <Suspense
          fallback={
            <LoaderComponent className={styles.loader_gray} duration="6e2" />
          }
        >
          <DashboardComponent />
        </Suspense>
      </ArticleComponent>
      <AsideComponent>
        <Suspense
          fallback={
            <LoaderComponent className={styles.loader_white} duration="4e2" />
          }
        >
          <NotifsComponent />
        </Suspense>
      </AsideComponent>
    </PageComponent>
  );
}

export default GamePage;
