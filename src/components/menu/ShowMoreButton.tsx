import React from "react";
import Button from "../buttons/Button";
import { ShowMoreButtonProps } from "@/types/types";

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  showAll,
  onClick,
}) => (
  <Button
    onClick={onClick}
    className="bg-blue-600 m-4 p-2 rounded-xl text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600"
  >
    {showAll ? "Show Less" : "Show More.."}
  </Button>
);

export default ShowMoreButton;
