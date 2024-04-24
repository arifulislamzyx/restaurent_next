import axios from "axios";

export const getMenu = async () => {
  const response = await axios("api/menu").then((res) =>
    console.log("Here is menu=>", res)
  );

  return response;
};
