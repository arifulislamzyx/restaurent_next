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
  item?: MenuItem;
  email?: string | null | undefined;
  className: string;
}

export interface MenuCardProps {
  item?: MenuItem[] | undefined;
  textLength?: number | undefined;
  email?: string | null | undefined;
}

export interface IASingleMenu {
  menuItem?: MenuItem;
  email?: string | null | undefined;
}

export interface ShowMoreButtonProps {
  setShowAll: (value: boolean) => void;
  showAll: boolean;
}
