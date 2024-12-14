import { useTranslation } from "react-i18next";
import { PageComponent } from "@/src/generic/components/page/Page.component";

function SetupPage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <h1>{t("setup.title")}</h1>
    </PageComponent>
  );
}

export default SetupPage;
