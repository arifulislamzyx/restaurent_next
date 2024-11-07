import { useSession } from "next-auth/react";
import MenuCard from "../menu/MenuCard";

export const SearchedMenu = ({ menu }) => {
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-8 mt-5 py-5">
      {menu.map((singleMenu) => (
        <MenuCard
          key={singleMenu._id}
          item={singleMenu}
          textLength={0}
          email={email}
        />
      ))}
    </div>
  );
};
