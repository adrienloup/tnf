import { useEffect, useState } from "react";
import { useGame, useGameDispatch } from "@/src/game/useGame";
import { CardComponent } from "@/src/generic/components/card/Card.component";
import { ButtonComponent } from "@/src/generic/components/button/Button.component";
import styles from "../../Game.module.scss";

export const BusinessComponent = () => {
  const setGame = useGameDispatch();
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
  const [publicDemand, setPublicDemand] = useState(100);

  const increasePrice = () => {
    setGame({
      funds,
      inventory,
      level,
      machines,
      priceNail: Math.min(priceNail + 0.01, 1),
      priceMachine,
      stock,
      total,
    });
  };

  const decreasePrice = () => {
    setGame({
      funds,
      inventory,
      level,
      machines,
      priceNail: Math.max(priceNail - 0.01, 0.01),
      priceMachine,
      stock,
      total,
    });
  };

  // Met à jour la demande en fonction du prix
  useEffect(() => {
    const newDemand = Math.max(0, 100 - priceNail * 30);
    setPublicDemand(newDemand);
  }, [priceNail]);

  // Ventes
  useEffect(() => {
    const interval = setInterval(() => {
      const adjustedDemand = publicDemand / 100; // Demande sous forme de facteur (0 à 1)
      const potentialSales = inventory * adjustedDemand * 2; // Facteur pour augmenter la vitesse de ventes
      const actualSales = Math.min(inventory, potentialSales); // Limité à l'inventaire
      setGame({
        funds: funds + actualSales * priceNail,
        inventory: inventory - actualSales,
        level,
        machines,
        priceNail,
        priceMachine,
        stock,
        total,
      });
    }, 1e3);

    return () => clearInterval(interval);
  }, [inventory, funds, publicDemand, priceNail]);

  return (
    <CardComponent>
      <h2>Business</h2>
      <p>Fonds disponibles : {funds.toFixed(2)} €</p>
      <p>Inventaire invendu : {inventory}</p>
      <p>Public Demande : {publicDemand.toFixed(2)} %</p>
      <div>
        <ButtonComponent className={styles.button} onClick={decreasePrice}>
          Baisser le prix
        </ButtonComponent>
        <ButtonComponent className={styles.button} onClick={increasePrice}>
          AUgmenter le prix
        </ButtonComponent>
      </div>
      <p>Prix par clou : {priceNail.toFixed(2)} €</p>
    </CardComponent>
  );
};
