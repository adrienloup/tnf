import { classNames } from "@/src/generic/utils/classNames";
import { Notif } from "@/src/game/components/notif/Notif.type";
import { ButtonComponent } from "@/src/generic/components/button/Button.component";
import { IconComponent } from "@/src/generic/components/icon/Icon";
import styles from "./Notif.module.scss";

export const NotifComponent = ({
  title,
  text,
  isActive,
  onClick,
  onAnimationEnd,
}: Notif) => {
  return (
    <div
      className={classNames([styles.notif, isActive ? styles.isActive : ""])}
      onAnimationEnd={onAnimationEnd!}
    >
      <div className={styles.title}>{title}</div>
      <p className={styles.text}>{text}</p>
      <ButtonComponent onClick={onClick} className={styles.button}>
        <IconComponent icon="close" />
      </ButtonComponent>
    </div>
  );
};
