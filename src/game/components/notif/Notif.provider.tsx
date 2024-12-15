import { useEffect, useReducer } from "react";
import { NotifReducer } from "@/src/game/components/notif/Notif.reduceur";
import { useLocalStorage } from "@/src/generic/hooks/useLocalStorage";
import { Children } from "@/src/generic/types/Children.type";
import { Notif } from "@/src/game/components/notif/Notif.type";
import {
  NotifContext,
  NotifDispatchContext,
} from "@/src/game/components/notif/Notif.context";

export function NotifProvider({ children }: { children: Children }) {
  const [localNotifs, setLocalNotifs] = useLocalStorage<Notif[]>(
    "_notif_1mm2_3",
    [],
  );
  const [notifs, setNotifs] = useReducer(NotifReducer, localNotifs);

  useEffect(() => {
    setLocalNotifs(notifs);
  }, [notifs]);

  return (
    <NotifContext.Provider value={notifs}>
      <NotifDispatchContext.Provider value={setNotifs}>
        {children}
      </NotifDispatchContext.Provider>
    </NotifContext.Provider>
  );
}
