"use server";
import { signIn, signOut } from "@/Authentication/auth";
export const doScialLogin = async (formData) => {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/dashboard" });
};

export const doLogout = async () => {
  await signOut({ redirectTo: "/" });
};

export const credenTialsSignIn = async (formData) => {
  try {
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    revalidatePath("/");
    return res;
  } catch (error) {
    console.error("error");
  }
};
