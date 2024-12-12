import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import React from "react";
import { FaDog } from "react-icons/fa";
import { IoMdHome, IoIosMail } from "react-icons/io";
import { GrAchievement } from "react-icons/gr";
import { AiFillPicture } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="max-w-full">
      <Dock className="items-end pb-3 bg-mDark border-2 border-mDarkHover">
        {Icons.map((item, idx) => (
          <Link key={idx} to={item.href}>
            <DockItem className="aspect-square rounded-full bg-mDarkHover text-mPrimary">
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.title}</DockLabel>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

const Icons = [
  {
    title: "Home",
    icon: <IoMdHome className="text-mPrimary size-full" />,
    href: "/home",
  },
  {
    title: "O mnie",
    icon: <FaDog className="text-mPrimary size-full" />,
    href: "/about",
  },
  {
    title: "Osiągnięcia",
    icon: <GrAchievement className="text-mPrimary size-full" />,
    href: "/achievements",
  },
  {
    title: "Galeria zdjęć",
    icon: <AiFillPicture className="text-mPrimary size-full" />,
    href: "/gallery",
  },
  {
    title: "Kontakt",
    icon: <IoIosMail className="text-mPrimary size-full" />,
    href: "/contact",
  },
];
