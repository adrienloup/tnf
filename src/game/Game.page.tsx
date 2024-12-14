import { useTranslation } from "react-i18next";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import { ArticleComponent } from "@/src/generic/components/article/Article.component";
import { AsideComponent } from "../generic/components/aside/Aside.component";

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <ArticleComponent>
        <h1>{t("page.game.title")}</h1>
      </ArticleComponent>
      <AsideComponent />
    </PageComponent>
  );
}

export default GamePage;
