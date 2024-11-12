export interface MobileNavProps {
  session?:
    | {
        user?: {
          image?: string | null | undefined;
          name?: string | null | undefined;
        };
      }
    | undefined
    | null;
  getCartItems?: any;
  handleLogout?: () => void;
  toggleProfile?: () => void;
}
