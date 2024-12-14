import { useContext } from "react";
import { GiftContext } from "@/src/game/components/gift/Gift.context";

export function useGift() {
  return useContext(GiftContext);
}
