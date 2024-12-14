import { useNotification } from "@/src/game/components/notification/useNotification";
import { NotificationComponent } from "@/src/game/components/notification/Notification.component";
import styles from "./Notifications.module.scss";

function NotificationsComponent() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className={styles.notifications}>
      {notifications.map((notification) => (
        <NotificationComponent
          key={notification.id}
          id={notification.id}
          title={notification.title}
          content={notification.content}
          onClick={() => removeNotification(notification)}
        />
      ))}
    </div>
  );
}

export default NotificationsComponent;
