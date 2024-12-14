// import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useGift } from "@/src/game/components/gift/useGift";
import { ManufacturingComponent } from "@/src/game/components/manufacturing/Manufacturing.component";
import { NailsComponent } from "../nails/Nails.component";
import { BusinessComponent } from "@/src/game/components/business/Business.component";
import styles from "./Dashboard.module.scss";

function DashboardComponent() {
  // const { t } = useTranslation();
  const { addGift } = useGift();

  // const onClick = () => addGift({ id: "gift1" });

  // const onClick2 = () => addGift({ id: "gift2" });

  // const onClick3 = () => addGift({ id: "gift3" });

  useEffect(() => {
    addGift({ id: "gift1" });
  }, []);

  return (
    <div className={styles.dashboard}>
      {/* <h1>{t("game.title", { total: 0 })}</h1> */}
      {/*  <button onClick={onClick}>add notification1</button>
      <button onClick={onClick2}>add notification2</button>
      <button onClick={onClick3}>add notification3</button> */}
      <NailsComponent />
      <div className={styles.columns}>
        <div className={styles.column}>
          <ManufacturingComponent />
        </div>
        <div className={styles.column}>
          <BusinessComponent />
        </div>
        <div className={styles.column}>
          <BusinessComponent />
        </div>
        <div className={styles.column}>
          <BusinessComponent />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
