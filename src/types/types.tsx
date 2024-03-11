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
