import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MapLayout from "../../Layouts/MapLayout";
import ScannerQRLayout from "../../Layouts/ScannerQRLayout";
import RewardLayout from "../../Layouts/RewardLayout";
import VideoLayout from "../../Layouts/VideoLayout";
import QuestionLayout from "../../Layouts/QuestionLayout";
import CompleteVideoLayout from "../../Layouts/CompleteVideoLayout";


const Stack = createStackNavigator();

const LoggedNavigation = (props) => (
    <Stack.Navigator>
      <Stack.Screen
        name="MapLayout"
        component={MapLayout}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="ScannerQRLayout"
        children={()=><ScannerQRLayout {...props} />}
        options={{
          title: 'Scanner le QR Code !',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }} />
      <Stack.Screen
        name="VideoLayout"
        component={VideoLayout}
        options={{
          title: 'Regardez bien ...',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
      />
      <Stack.Screen
        name="QuestionLayout"
        component={QuestionLayout}
        options={{
          title: 'Répondez à la question !',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
      />
      {/*<Stack.Screen*/}
      {/*  name="BlindTestLayout"*/}
      {/*  component={BlindTestLayout}*/}
      {/*  options={{*/}
      {/*    title: 'Écoutez attentivement ...',*/}
      {/*    headerTitleStyle: {*/}
      {/*      fontWeight: 'bold',*/}
      {/*      fontSize: 20,*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}
      <Stack.Screen
        name="CompleteVideoLayout"
        component={CompleteVideoLayout}
        options={{
          title: 'Voici le résultat !',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
      />
      <Stack.Screen
        name="RewardLayout"
        component={RewardLayout}
        options={{
          title: 'Votre récompense !',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
      />
    </Stack.Navigator>
);

export default LoggedNavigation;
