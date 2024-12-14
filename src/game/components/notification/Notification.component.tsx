import { Notification } from "@/src/game/components/notification/Notification.type";
import styles from "./Notification.module.scss";

export const NotificationComponent = ({
  title,
  content,
  onClick,
}: Notification) => {
  return (
    <div className={styles.notification}>
      <div>{title}</div>
      <div>{content}</div>
      <div onClick={onClick}>button</div>
    </div>
  );
};
