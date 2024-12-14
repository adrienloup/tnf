export type Gift = {
  id: string;
  title: string;
  text: string;
  isNew?: boolean;
  onClick?: () => void;
  onAnimationEnd?: () => void;
};
