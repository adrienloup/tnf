import { useContext } from "react";
import { NotificationContext } from "@/src/game/components/notification/Notification.context";

export function useNotification() {
  return useContext(NotificationContext);
}
