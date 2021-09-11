import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeNavigator } from "./HomeNavigator";
import { HOME } from "../constants";

export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};
