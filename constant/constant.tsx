import {
  BookOpen,
  House,
  LayoutDashboard,
  Navigation,
  NotebookText,
  PhoneOutgoing,
} from "lucide-react";

export const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
    icon: <House className="text-white w-5 h-5 hover:text-yellow-400" />,
  },
  {
    id: 2,
    url: "/about",
    label: "About",
    icon: <BookOpen className="text-white w-5 h-5 hover:text-yellow-400" />,
  },
  {
    id: 3,
    url: "/destination",
    label: "Destination",
    icon: <Navigation className="text-white w-5 h-5 hover:text-yellow-400" />,
  },
  {
    id: 4,
    url: "/blog",
    label: "Blog",
    icon: <NotebookText className="text-white w-5 h-5 hover:text-yellow-400" />,
  },

  {
    id: 6,
    url: "/contact",
    label: "Contact",
    icon: (
      <PhoneOutgoing className="text-white w-5 h-5 hover:text-yellow-400" />
    ),
  },
  // {
  //   id: 7,
  //   url: "/dashboard",
  //   label: "Dashboard",
  //   icon: (
  //     <LayoutDashboard className="text-white w-5 h-5 hover:text-yellow-400" />
  //   ),
  // },
];
