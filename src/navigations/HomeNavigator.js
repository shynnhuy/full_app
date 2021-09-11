import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  SETTINGS,
  CREATE_CONTACT,
} from "../constants";
import { ContactDetail, Contacts, CreateContact, Settings } from "../screens";

export const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};
