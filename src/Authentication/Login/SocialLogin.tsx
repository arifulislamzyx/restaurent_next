import React from "react";
import { doScialLogin } from "../../../app/actions/index";
import { Github } from "lucide-react";
import Button from "@/components/buttons/Button";

const SocialLogin = () => {
  return (
    <form
      action={doScialLogin}
      className="flex flex-col items-center space-y-4"
    >
      <Button
        className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
        type="submit"
        name="action"
        value="google"
      >
        Sign in with Google
      </Button>

      <Button
        className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 transition duration-200"
        type="submit"
        name="action"
        value="github"
      >
        <Github className="mr-2" />
        Sign in with GitHub
      </Button>
    </form>
  );
};

export default SocialLogin;

SocialLogin.js;
