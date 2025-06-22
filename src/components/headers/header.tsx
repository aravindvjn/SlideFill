import React from "react";
import { AvatarComponent } from "../common/avatar-component";
import { Input } from "../ui/input";
import { Bell } from "lucide-react";

const Header = () => {
  const user = { name: "Aravind", image: "https://github.com/shadcn.png" };

  return (
    <div className="sticky p-[10px] flex items-center h-[60px] border-b-1 border-border w-full top-0 bg-background justify-between gap-2">
      <div className="flex items-end gap-3">
        <AvatarComponent user={user} />
        <p className="hidden md:flex text-[20px] font-medium">
          {user.name ? user.name + "'s Lab" : "Your Lab"}
        </p>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Input placeholder="Search for presentations..." />
        <Bell size={35} className="text-border" />
      </div>
    </div>
  );
};

export default Header;
