import { LoaderComponent } from "@/src/generic/components/loader/Loader.component";
import styles from "./Aside.module.scss";

export const AsideComponent = () => {
  return (
    <aside className={styles.aside} role="aside">
      <div className={styles.inner}>
        <LoaderComponent className={styles.loader} />
      </div>
    </aside>
  );
};
