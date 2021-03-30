import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MapLayout from "../../Layouts/MapLayout";
import ScannerQR from "../../Components/ScannerQRComponent";

const Stack = createStackNavigator();

const LoggedNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="MapLayout"
        component={MapLayout}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="ScannerQR"
        component={ScannerQR}
        options={{
          title: 'Scanner le QR Code !',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
      />
    </Stack.Navigator>
);

export default LoggedNavigation;
