import { useContext } from "react";
import {
  NotifContext,
  NotifDispatchContext,
} from "@/src/game/components/notif/Notif.context";

export function useNotif() {
  return useContext(NotifContext);
}

export function useNotifDispatch() {
  return useContext(NotifDispatchContext);
}
