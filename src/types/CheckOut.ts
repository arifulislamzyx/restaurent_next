import { MenuItem } from "./menuItems";

export interface ICheckOutProps {
  item?: MenuItem | null | undefined;
  handlePayment?: () => void;
  handleDelete?: (_id: string) => void;
  total?: number;
}
