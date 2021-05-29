import React from "react";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BiIcons.BiHome />,
    cName: "nav-text",
  },
  {
    title: "DormSetting",
    path: "/dormsetting",
    icon: <BiIcons.BiBuilding />,
    cName: "nav-text",
  },
  {
    title: "Room",
    path: "/room",
    icon: <BiIcons.BiDoorOpen />,
    cName: "nav-text",
  },
  {
    title: "Invoice",
    path: "/invoice",
    icon: <RiIcons.RiBillLine />,
    cName: "nav-text",
  },
  {
    title: "Utility",
    path: "/utility",
    icon: <AiIcons.AiOutlineCalculator />,
    cName: "nav-text",
  },
  // {
  //   title: "Login",
  //   path: "/login",
  //   icon: <BiIcons.BiLogIn />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "SignUp",
  //   path: "/signup",
  //   icon: <RiIcons.RiBillLine />,
  //   cName: "nav-text",
  // },
];
