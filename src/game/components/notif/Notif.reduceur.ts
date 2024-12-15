import { Notif } from "@/src/game/components/notif/Notif.type";

export function NotifReducer(
  notifs: Notif[],
  action: {
    type: string;
    id: string;
  },
) {
  switch (action.type) {
    case "added": {
      const exists = notifs.some((notif) => notif.id === action.id);
      if (exists) {
        return notifs;
      }
      return [
        ...notifs,
        {
          id: action.id,
          isActive: true,
        },
      ];
    }
    case "deleted": {
      return notifs.filter((notif) => notif.id !== action.id);
    }
    case "disabled": {
      return notifs.map((notif) => {
        if (notif.id === action.id) {
          return { ...notif, isActive: false };
        } else {
          return notif;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
