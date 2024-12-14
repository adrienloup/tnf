import { useTranslation } from "react-i18next";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import { ArticleComponent } from "@/src/generic/components/article/Article.component";
import { AsideComponent } from "../generic/components/aside/Aside.component";

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <ArticleComponent>
        <h1>1,000,000,000,000,000,000,000</h1>
        {t("game.title")}
      </ArticleComponent>
      <AsideComponent />
    </PageComponent>
  );
}

export default GamePage;
