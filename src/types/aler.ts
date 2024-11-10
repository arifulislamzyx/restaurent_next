type SwalIconType = "success" | "error" | "warning" | "info" | "question";

export interface IAlert {
  title: string;
  text: string;
  icon: SwalIconType;
  confirmButtonText: string;
  redirectUrl: string;
  showCancelButton: boolean;
  confirmButtonColor: string;
  cancelButtonColor: string;
}
