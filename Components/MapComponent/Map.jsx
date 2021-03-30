import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


const Map = ({navigation, regionCoords, markers}) => (
  <View style={styles.container}>
    <MapView
      initialRegion={{
        latitude: regionCoords.latitude,
        longitude: regionCoords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      style={styles.map}
    >
      {
        markers.map((marker) => {
          return <Marker
            onPress={() => { navigation.navigate("ScannerQRLayout") }}
            key={marker.latitude + '_' + marker.longitude}
            title={marker.title}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        })
      }
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  map: {
    width: '90%',
    height: '100%',
  },
});

export default Map;
