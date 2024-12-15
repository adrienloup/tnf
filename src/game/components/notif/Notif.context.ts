import { createContext, Dispatch } from "react";
import { Notif } from "@/src/game/components/notif/Notif.type";

export const NotifContext = createContext<Notif[]>([]);

export const NotifDispatchContext = createContext<
  Dispatch<{
    id: string;
    type: string;
  }>
>(() => {});
