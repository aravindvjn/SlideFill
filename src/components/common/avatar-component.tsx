import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getRandomColor } from "@/lib/helper";

type AvatarComponentProps = {
  user: {
    image: string;
    name: string;
  };
  size?: number;
};

export const AvatarComponent = ({ user, size = 45 }: AvatarComponentProps) => {
  const hasImage = user.image && user.image !== "";

  const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "U";

  const color = getRandomColor();
  return (
    <Avatar
      style={{
        height: size,
        width: size,
        fontSize: size - 20,
      }}
      className="rounded"
    >
      {hasImage ? (
        <AvatarImage src={user.image} alt={user.name} />
      ) : (
        <AvatarFallback
        className="rounded"
          style={{
            backgroundColor: color === "#FFFFFF" ? "#000000" : color,
            color: "#fff",
          }}
        >
          {firstLetter}
        </AvatarFallback>
      )}
    </Avatar>
  );
};
