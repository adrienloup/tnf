import { createContext } from "react";
import { Notification } from "@/src/game/components/notification/Notification.type";

export const NotificationContext = createContext<{
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (notification: Notification) => void;
}>({
  notifications: [],
  addNotification: (notification: Notification) => notification,
  removeNotification: (notification: Notification) => notification,
});
