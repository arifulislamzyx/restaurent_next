import { IAlert2 } from "@/types/alert";
import Swal from "sweetalert2";

export const AlertSwal2 = ({
  title,
  text = "",
  icon,
  confirmButtonText = "OK",
  showClass = {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
  },
  hideClass = {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
  },
}: IAlert2) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    showClass,
    hideClass,
  });
};
