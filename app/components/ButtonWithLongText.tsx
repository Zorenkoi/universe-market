import { Button } from "@radix-ui/themes";
import React from "react";

interface Props {
  mainText: string;
  smallText: string;
  color: "red" | "green" | "gray";
  onClick?: (param: any) => any;
}

const ButtonWithLongText = ({ mainText, smallText, color, onClick }: Props) => {
  return (
    <Button color={color} onClick={onClick}>
      <span className="hidden md:inline-block">{mainText}</span>
      <span className="md:hidden">{smallText}</span>
    </Button>
  );
};

export default ButtonWithLongText;
