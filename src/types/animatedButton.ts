import { Variants } from "framer-motion";

export interface IAAnimatedButton {
  variants: Variants;
  initial?: string;
  whileInView?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
