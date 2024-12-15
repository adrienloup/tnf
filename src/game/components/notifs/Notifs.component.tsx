import { useTranslation } from "react-i18next";
import { Notif } from "@/src/game/components/notif/Notif.type";
import { NotifComponent } from "@/src/game/components/notif/Notif.component";
import {
  useNotif,
  useNotifDispatch,
} from "@/src/game/components/notif/useNotif";
import styles from "./Notifs.module.scss";

function NotifsComponent() {
  const { t } = useTranslation();
  const setNotifs = useNotifDispatch();
  const notifs = useNotif();

  return (
    <div className={styles.notifs}>
      {notifs.map((notif: Notif) => (
        <NotifComponent
          key={notif.id}
          id={notif.id}
          title={t(`game.${notif.id}.title`)}
          text={t(`game.${notif.id}.text`)}
          isActive={notif.isActive}
          onClick={() => {
            setNotifs({
              type: "deleted",
              id: notif.id,
            });
          }}
          onAnimationEnd={() => {
            setNotifs({
              type: "disabled",
              id: notif.id,
            });
          }}
        />
      ))}
    </div>
  );
}

export default NotifsComponent;
