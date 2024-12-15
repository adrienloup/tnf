import { Dispatch, createContext } from "react";
import { Game } from "@/src/game/Game.type";

const value: Game = {
  funds: 0, // Funds Available
  inventory: 0, // Nails Inventory
  level: 1, // Game Progress
  machines: 0, // High Speed Machine
  priceNail: 0.6, // Price per Nail
  priceMachine: 5, // Price per Machine
  stock: 1000, // Steel Stock
  total: 0, // Total Nails
};

export const GameContext = createContext<{
  funds: number;
  inventory: number;
  level: number;
  machines: number;
  priceNail: number;
  priceMachine: number;
  stock: number;
  total: number;
}>(value);

export const GameDispatchContext = createContext<
  Dispatch<{
    funds: number;
    inventory: number;
    level: number;
    machines: number;
    priceNail: number;
    priceMachine: number;
    stock: number;
    total: number;
  }>
>(() => {});
