import { CardComponent } from "@/src/generic/components/card/Card.component";
import styles from "./Business.module.scss";

export const BusinessComponent = () => {
  return (
    <CardComponent className={styles.business}>
      <h2>Business</h2>
      <p>Public demand 88%</p>
      <p>Available Funds</p>
      <p>$&nbsp;0</p>
      <p>Unsold Inventory</p>
      <p>0</p>
    </CardComponent>
  );
};
