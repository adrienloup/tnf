import { useLocalStorage } from "@/src/generic/hooks/useLocalStorage";
import { Children } from "@/src/generic/types/Children.type";
import { Gift } from "@/src/game/components/gift/Gift.type";
import { GiftContext } from "@/src/game/components/gift/Gift.context";

export function GiftProvider({ children }: { children: Children }) {
  const [gifts, setGifts] = useLocalStorage<Gift[]>("_gift_1mm2_3", []);

  const addGift = (gift: Gift) => {
    const _gift = gifts.find((g) => g.id === gift.id);
    if (_gift) {
      return;
    }
    setGifts([{ ...gift, isNew: true }, ...gifts]);
  };

  const removeGift = (gift: Gift) => {
    setGifts(gifts.filter((g) => g.id !== gift.id));
  };

  const removeNewGift = (gift: Gift) => {
    const _gifts = gifts.filter((g) => g.id !== gift.id);
    setGifts([{ ...gift, isNew: false }, ..._gifts]);
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift, removeGift, removeNewGift }}>
      {children}
    </GiftContext.Provider>
  );
}
