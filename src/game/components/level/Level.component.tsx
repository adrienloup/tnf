import { useEffect } from "react";
import { useGame, useGameDispatch } from "@/src/game/useGame";
import { useNotifDispatch } from "@/src/game/components/notif/useNotif";

export const LevelComponent = () => {
  const setGame = useGameDispatch();
  const setNotifs = useNotifDispatch();
  const {
    funds,
    inventory,
    level,
    machines,
    priceNail,
    priceMachine,
    stock,
    total,
  } = useGame();

  useEffect(() => {
    setNotifs({
      type: "added",
      id: "notif1",
    });

    if (total >= 100) {
      setGame({
        funds,
        inventory,
        level: level + 1,
        machines,
        priceNail,
        priceMachine,
        stock,
        total,
      });
      setNotifs({
        type: "added",
        id: "notif2",
      });
    }

    if (total >= 10000) {
      setGame({
        funds,
        inventory,
        level: level + 1,
        machines,
        priceNail,
        priceMachine,
        stock,
        total,
      });
      setNotifs({
        type: "added",
        id: "notif3",
      });
    }

    if (total >= 100000) {
      setGame({
        funds,
        inventory,
        level: level + 1,
        machines,
        priceNail,
        priceMachine,
        stock,
        total,
      });
    }
  }, [total]);

  return <>Level {level}</>;
};
