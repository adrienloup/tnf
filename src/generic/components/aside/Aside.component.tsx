import { Aside } from "@/src/generic/components/aside/Aside.type";
import styles from "./Aside.module.scss";

export const AsideComponent = ({ children }: Aside) => {
  return (
    <aside className={styles.aside} role="aside">
      {children}
    </aside>
  );
};
