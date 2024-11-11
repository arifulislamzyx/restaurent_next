type SwalIconType = "success" | "error" | "warning" | "info" | "question";

export interface IAlert {
  title: string;
  icon: SwalIconType;
  text?: string;
  confirmButtonText?: string;
  redirectUrl?: string;
  showCancelButton?: boolean;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  timer?: number;
  position?: any;
  showConfirmButton?: boolean;
}
