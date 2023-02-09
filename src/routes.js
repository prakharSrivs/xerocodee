import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

import Free from "views";

const routes = [
  {
    name: "XeroCodee",
    layout: "/ ",
    path: "/",
    component: Free,
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  },
];

export default routes;
