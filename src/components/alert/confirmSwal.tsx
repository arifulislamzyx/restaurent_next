import { IAlert } from "@/types/alert";
import Swal from "sweetalert2";

export const ConfirmSwal = async ({
  title,
  text,
  icon,
  confirmButtonText = "ok",
  redirectUrl,
  timer,
  position,
}: IAlert) => {
  const res = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: false,
    showConfirmButton: false,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
    timer,
    position,
  });
  if (res.isConfirmed) {
    window.location.href = redirectUrl as string;
  }
};
