export interface Notif {
  id: string;
  isActive?: boolean;
  text?: string;
  title?: string;
  onClick?: () => void;
  onAnimationEnd?: () => void;
}
