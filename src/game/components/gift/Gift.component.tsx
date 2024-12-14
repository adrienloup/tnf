import { classNames } from "@/src/generic/utils/classNames";
import { Gift } from "@/src/game/components/gift/Gift.type";
import { ButtonComponent } from "@/src/generic/components/button/Button.component";
import styles from "./Gift.module.scss";
import { IconComponent } from "@/src/generic/components/icon/Icon";

export const GiftComponent = ({
  title,
  text,
  isNew,
  onClick,
  onAnimationEnd,
}: Gift) => {
  return (
    <div
      className={classNames([styles.gift, isNew ? styles.isNew : ""])}
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
