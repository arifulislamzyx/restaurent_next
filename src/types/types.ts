import { MenuItem } from "./menuItems";

export interface ModalsProps {
  isVisible: boolean;
  onClose: () => void;
  menus: any;
}

export interface Component {
  title: string;
  href: string;
  description: string;
}

export interface AddToCartButtonProps {
  item: MenuItem;
  email?: string;
  className: string;
}

export interface MenuCardProps {
  item: MenuItem;
  textLength: number;
  email: string;
}

export interface ShowMoreButtonProps {
  setShowAll: (value: boolean) => void;
  showAll: boolean;
}
