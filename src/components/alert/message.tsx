import { IAlert } from "@/types/aler";
import Swal from "sweetalert2";

export const ShowAlert = async ({
  title = "Alert",
  text = "",
  icon = "warning",
  confirmButtonText = "OK",
  redirectUrl = "/",
}: IAlert) => {
  const res = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
  });
  if (res.isConfirmed) {
    window.location.href = redirectUrl;
  }
};
