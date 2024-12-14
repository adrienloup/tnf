import styles from "@/src/generic/components/aside/Aside.module.scss";

export const AsideComponent = () => {
  return (
    <aside className={styles.aside} role="aside">
      <div className={styles.inner}>aside</div>
    </aside>
  );
};
