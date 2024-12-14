export type Notification = {
  id: string;
  title: string;
  content: string;
  onClick?: () => void;
};
