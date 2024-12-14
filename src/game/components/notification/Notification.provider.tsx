import { useLocalStorage } from "@/src/generic/hooks/useLocalStorage";
import { Children } from "@/src/generic/types/Children.type";
import { Notification } from "@/src/game/components/notification/Notification.type";
import { NotificationContext } from "@/src/game/components/notification/Notification.context";

export function NotificationProvider({ children }: { children: Children }) {
  const [notifications, setNotifications] = useLocalStorage<Notification[]>(
    "_tnf_1mm2_3_notification",
    [],
  );

  const addNotification = (notification: Notification) => {
    const foundObject = notifications.find((n) => n.id === notification.id);
    if (!foundObject) {
      setNotifications([{ ...notification }, ...notifications]);
    }
  };

  const removeNotification = (notification: Notification) => {
    setNotifications(notifications.filter((n) => n.id !== notification.id));
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
