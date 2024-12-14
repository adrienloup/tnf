import { useGift } from "@/src/game/components/gift/useGift";
import { GiftComponent } from "@/src/game/components/gift/Gift.component";
import styles from "./Gifts.module.scss";

function GiftsComponent() {
  const { gifts, removeGift, removeNewGift } = useGift();

  return (
    <div className={styles.gifts}>
      {gifts.map((gift) => (
        <GiftComponent
          key={gift.id}
          id={gift.id}
          title={gift.title}
          text={gift.text}
          isNew={gift.isNew}
          onClick={() => removeGift(gift)}
          onAnimationEnd={() => removeNewGift(gift)}
        />
      ))}
    </div>
  );
}

export default GiftsComponent;
