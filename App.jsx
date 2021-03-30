import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Logo from './Components/LogoComponent';
import Navigation from "./Navigations/Navigation";

export default function App() {
  return (
    <>
      <Logo />
      <Navigation />
    </>

    // <>
    //   <Logo />
    //   <View style={styles.container}>
    //     {/*<LoginLayout />*/}
    //     {/*<NewAccountLayout />*/}
    //     {/*<MapLayout />*/}
    //     {/*<ScannerQR />*/}
    //     <Navigation />
    //   </View>
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
