import { ManufacturingComponent } from "@/src/game/components/manufacturing/Manufacturing.component";
import { TotalComponent } from "../total/Total.component";
import { BusinessComponent } from "@/src/game/components/business/Business.component";
import styles from "./Dashboard.module.scss";

function DashboardComponent() {
  return (
    <div className={styles.dashboard}>
      <TotalComponent />
      <div className={styles.columns}>
        <div className={styles.column}>
          <BusinessComponent />
          <ManufacturingComponent />
        </div>
        <div className={styles.column}></div>
        <div className={styles.column}></div>
        <div className={styles.column}></div>
      </div>
    </div>
  );
}

export default DashboardComponent;
