export interface IAButton {
  children: React.ReactNode;
  name?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;

  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
