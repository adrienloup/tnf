import { Dispatch, createContext } from "react";
import { Game } from "@/src/game/Game.type";

const value: Game = {
  funds: 0, // Funds Available
  inventory: 0, // Nails Inventory
  level: 1, // Game Progress
  machines: 0, // High Speed Machine
  priceNail: 0.9, // Price per Nail
  priceMachine: 5, // Price per Machine
  stock: 1000, // Steel Stock
  total: 0, // Total Nails
};

export const GameContext = createContext<Game>(value);

export const GameDispatchContext = createContext<Dispatch<Game>>(() => {});
