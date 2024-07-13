import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center h-screen my-10">
      <SignIn />
    </div>
  );
}
