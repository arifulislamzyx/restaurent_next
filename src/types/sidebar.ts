export interface IASidebar {
  id: number;
  title: string;
  link?: string;
  submenus?: IASubmenu[];
}

export interface IASubmenu {
  id: number;
  name: string;
  slug?: string;
  icons?: React.JSX.Element;
}
