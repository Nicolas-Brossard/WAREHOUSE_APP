import React from 'react';
import Label from "../../Components/LabelComponent";
import {StyleSheet, View} from "react-native";
import Map from "../../Components/MapComponent";
import { WAREHOUSE_COORDS, MARKERS } from "../../assets/data/markers";


const MapContainer = (props) => {
  return(
    <View style={styles.container}>
      <Label title="Trouvez les !" />
      <Label title="Cliquez sur un marqueur pour scanner le QR Code" size={15} />
      <Map navigation={props.navigation} regionCoords={WAREHOUSE_COORDS} markers={MARKERS} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MapContainer;
