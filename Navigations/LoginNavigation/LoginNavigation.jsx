import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LoginLayout from "../../Layouts/LoginLayout";
import NewAccountLayout from "../../Layouts/NewAccountLayout";

const Tab = createMaterialTopTabNavigator();

const LoginNavigation = (props) => (
    <Tab.Navigator
      initialRouteName="LoginLayout">
      <Tab.Screen
        name="LoginLayout"
        children={()=><LoginLayout {...props} />}
        options={{
          tabBarLabel: 'Connexion',
          tabBarAccessibilityLabel: 'Connexion',
        }}
      />
      <Tab.Screen
        name="NewAccountLayout"
        children={()=><NewAccountLayout {...props} />}
        options={{
          tabBarLabel: 'Inscription',
          tabBarAccessibilityLabel: 'Inscription',
        }}/>
    </Tab.Navigator>
);

export default LoginNavigation;
