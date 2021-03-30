import React, { useState } from 'react';
import LoginNavigation from '../LoginNavigation';
import LoggedNavigation from '../LoggedNavigation';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

const Navigation = () => {
  const [logged, setStatus] = useState(false);
  return (
    <NavigationContainer theme={theme}>
      {
        logged
          ? <LoggedNavigation />
          : <LoginNavigation logged={logged} setStatus={setStatus} />
      }
    </NavigationContainer>
  );
}

export default Navigation;
