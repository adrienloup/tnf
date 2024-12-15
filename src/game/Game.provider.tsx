import { useLocalStorage } from "@/src/generic/hooks/useLocalStorage";
import { Children } from "@/src/generic/types/Children.type";
import { Game } from "@/src/game/Game.type";
import { GameContext, GameDispatchContext } from "@/src/game/Game.context";

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

export function GameProvider({ children }: { children: Children }) {
  const [game, setGame] = useLocalStorage("_game_1mm2_3", value);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={setGame}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
