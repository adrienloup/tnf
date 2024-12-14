import { CardComponent } from "@/src/generic/components/card/Card.component";
import styles from "./Manufacturing.module.scss";

export const ManufacturingComponent = () => {
  return (
    <CardComponent className={styles.manufacturing}>
      <h2>Manufacturing</h2>
      <p>Public demand 88%</p>
      <p>Available Funds</p>
      <p>$&nbsp;0</p>
      <p>Unsold Inventory</p>
      <p>0</p> <p>Public demand 88%</p>
      <p>Available Funds</p>
      <p>$&nbsp;0</p>
      <p>Unsold Inventory</p>
      <p>0</p>
    </CardComponent>
  );
};
