import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import React from "react";
import { FaDog } from "react-icons/fa";
import { IoMdHome, IoIosMail } from "react-icons/io";
import { GrAchievement } from "react-icons/gr";
import { AiFillPicture } from "react-icons/ai";

export const Navbar: React.FC = () => {
  return (
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3 bg-mDark">
        {Icons.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-mDarkHover text-mPrimary"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
};

const Icons = [
  { title: "Home", icon: <IoMdHome className="text-mPrimary w-full h-full"/>, href: "/home" },
  { title: "About", icon: <FaDog className="text-mPrimary w-full h-full"/>, href: "/about" },
  { title: "Achievements", icon: <GrAchievement className="text-mPrimary w-full h-full"/>, href: "/achievements" },
  { title: "Gallery", icon: <AiFillPicture className="text-mPrimary w-full h-full"/>, href: "/gallery" },
  { title: "Contact", icon: <IoIosMail className="text-mPrimary w-full h-full"/>, href: "/contact" },
];
