import { classNames } from "@/src/generic/utils/classNames";
import { Icon } from "@/src/generic/components/icon/Icon.type";
import styles from "./Icon.module.scss";

export const IconComponent = ({ icon, className }: Icon) => {
  return (
    <span aria-hidden={false} className={classNames([styles.icon, className])}>
      {icon}
    </span>
  );
};
