import { useTranslation } from "react-i18next";
import { useGift } from "@/src/game/components/gift/useGift";
import { ManufacturingComponent } from "@/src/game/components/manufacturing/Manufacturing.component";
// import { BusinessComponent } from "@/src/game/components/business/Business.component";
import styles from "./Dashboard.module.scss";

function DashboardComponent() {
  const { t } = useTranslation();
  const { addGift } = useGift();

  const onClick = () =>
    addGift({
      id: "1",
      title: t("game.gift.gift1.title"),
      text: t("game.gift.gift1.text"),
    });

  const onClick2 = () => addGift({ id: "2", title: "222222", text: "uuuuu" });

  return (
    <div className={styles.dashboard}>
      <h1>1,000,000,000,000,000,000,000</h1>
      {t("game.title")}
      <button onClick={onClick}>add notification1</button>
      <button onClick={onClick2}>add notification2</button>
      <div className={styles.columns}>
        <div className={styles.column}>
          <ManufacturingComponent />
        </div>
        <div className={styles.column}>{/* <BusinessComponent /> */}</div>
        <div className={styles.column}></div>
      </div>
    </div>
  );
}

export default DashboardComponent;
