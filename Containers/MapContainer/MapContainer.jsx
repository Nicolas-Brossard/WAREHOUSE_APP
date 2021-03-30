import React from 'react';
import Label from "../../Components/LabelComponent";
import {StyleSheet, View} from "react-native";
import Map from "../../Components/MapComponent";

// Coordonnées du Warehouse, pour centrer la carte dessus
const warehouseCoords = {
  latitude: 47.20111556045541,
  longitude: -1.5727438558193125,
}

// A compléter avec les points du jeu
const markersCoords = [
  {
    latitude: 47.20111556045541,
    longitude: -1.5727438558193125,
    title: 'Warehouse'
  },
]

const MapContainer = (props) => {
  return(
    <View style={styles.container}>
      <Label title="Trouvez les !" />
      <Label title="Cliquez sur un marqueur pour scanner le QR Code" size={15} />
      <Map navigation={props.navigation} regionCoords={warehouseCoords} markersCoords={markersCoords} />
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
