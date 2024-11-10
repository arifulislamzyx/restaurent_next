"use server";
import { signIn, signOut } from "@/Authentication/auth";
import { revalidatePath } from "next/cache";
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
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    revalidatePath("/dashboard");

    return res;
  } catch (error) {
    console.error("Error during credentials sign-in", error);
    throw error;
  }
};
