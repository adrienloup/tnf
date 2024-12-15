import { useEffect, useRef, useState } from "react";
import { useGame, useGameDispatch } from "@/src/game/useGame";
import { CardComponent } from "@/src/generic/components/card/Card.component";
import { ButtonComponent } from "@/src/generic/components/button/Button.component";
import styles from "../../Game.module.scss";

export const ManufacturingComponent = () => {
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
  const [steelPrice, setSteelPrice] = useState(10);
  const [checked, setChecked] = useState(false);
  const rate = useRef(0);

  const makeNail = () => {
    if (stock < 1) return;
    setGame({
      funds,
      inventory: inventory + 1,
      level,
      machines,
      priceNail,
      priceMachine,
      stock: stock - 1,
      total: total + 1,
    });
    rate.current += 1;
  };

  const buySteel = () => {
    if (funds >= steelPrice) {
      setGame({
        funds: funds - steelPrice,
        inventory,
        level,
        machines,
        priceNail,
        priceMachine,
        stock: stock + 1000,
        total,
      });
    }
  };

  const buyMachine = () => {
    if (funds >= priceMachine) {
      setGame({
        funds: funds - priceMachine,
        inventory,
        level,
        machines: machines + 1,
        priceNail,
        priceMachine: priceMachine + 0.35 * machines,
        stock,
        total,
      });
    }
  };

  // Production automatique
  useEffect(() => {
    const interval = setInterval(() => {
      if (stock >= machines) {
        setGame({
          funds,
          inventory: inventory + machines,
          level,
          machines,
          priceNail,
          priceMachine,
          stock: stock - machines,
          total: total + machines,
        });
        rate.current = machines;
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [inventory, machines, priceNail, stock, total]);

  // Prix de l'acier entre 0.5 et 10 €
  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = parseFloat(
        (Math.random() * (10 - 0.5) + 0.5).toFixed(2)
      );
      setSteelPrice(newPrice);
    }, 5e3);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      rate.current = machines;
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  // Achats automatique
  useEffect(() => {
    if (!checked) return;
    console.log("ZZZZ");
    if (stock <= 100) {
      buySteel();
    }
  }, [stock]);

  return (
    <CardComponent>
      <h2>Manufacturing</h2>
      <p>Rendement par seconde : {rate.current}</p>
      <ButtonComponent className={styles.button} onClick={makeNail}>
        Fabriquer clou
      </ButtonComponent>
      <p>Plaques d'acier : {stock}</p>
      <p>Prix par plaque : {steelPrice.toFixed(2)} €</p>
      <div>
        <ButtonComponent
          className={styles.button}
          disabled={funds < steelPrice}
          onClick={buySteel}
        >
          Acheter acier
        </ButtonComponent>
        {level >= 3 ? (
          <ButtonComponent
            className={styles.button}
            onClick={() => setChecked(!checked)}
          >
            Auto {checked ? "ok" : "ko"}
          </ButtonComponent>
        ) : null}
      </div>
      {level >= 2 ? (
        <>
          <p>Machines automatiques : {machines}</p>
          <ButtonComponent
            className={styles.button}
            onClick={buyMachine}
            disabled={stock === 0 || funds < priceMachine}
          >
            Acheter machine
          </ButtonComponent>
          <p>Prix par machine : {priceMachine.toFixed(2)} €</p>
        </>
      ) : null}
    </CardComponent>
  );
};
