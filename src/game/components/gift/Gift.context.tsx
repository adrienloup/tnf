import { createContext } from "react";
import { Gift } from "@/src/game/components/gift/Gift.type";

export const GiftContext = createContext<{
  gifts: Gift[];
  addGift: (gift: Gift) => void;
  removeGift: (gift: Gift) => void;
  removeNewGift: (gift: Gift) => void;
}>({
  gifts: [],
  addGift: (gift: Gift) => gift,
  removeGift: (gift: Gift) => gift,
  removeNewGift: (gift: Gift) => gift,
});
