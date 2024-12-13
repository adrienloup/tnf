import { version } from "@/package.json";
import styles from "@/src/generic/components/footer/Footer.module.scss";

export const FooterComponent = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      tnf v{version}
    </footer>
  );
};
