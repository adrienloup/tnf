import { useGameDispatch } from "@/src/game/useGame";
import { useNotifDispatch } from "@/src/game/components/notif/useNotif";
import { useLanguage } from "@/src/generic/languages/useLanguage";
import { useTheme } from "@/src/generic/theme/useTheme";
import { Theme } from "@/src/generic/theme/Theme.type";
import { LevelComponent } from "@/src/game/components/level/Level.component";
import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  const setGame = useGameDispatch();
  const setNotifs = useNotifDispatch();
  const { language, setLanguage } = useLanguage();
  const { setTheme } = useTheme();

  const changeLanguage = () => setLanguage(language === "fr" ? "en" : "fr");

  const changeTheme = (theme: Theme) => setTheme(theme);

  const restart = () => {
    setGame({
      funds: 0, // Funds Available
      inventory: 0, // Nails Inventory
      level: 1, // Game Progress
      machines: 0, // High Speed Machine
      priceNail: 0.6, // Price per Nail
      priceMachine: 5, // Price per Machine
      stock: 1000, // Steel Stock
      total: 0, // Total Nails
    });
  };

  const addNotif2 = () => setNotifs({ type: "added", id: "notif2" });
  const addNotif3 = () => setNotifs({ type: "added", id: "notif3" });

  return (
    <header className={styles.header} role="banner">
      <button onClick={restart}>Restart</button>
      <button onClick={changeLanguage}>
        {language === "fr" ? "EN" : "FR"}
      </button>
      <button onClick={() => changeTheme("dark")}>dark</button>
      <button onClick={() => changeTheme("light")}>light</button>
      <button onClick={() => changeTheme("system")}>system</button>
      <button onClick={addNotif2}>notif2</button>
      <button onClick={addNotif3}>notif3</button>
      <LevelComponent />
    </header>
  );
};
