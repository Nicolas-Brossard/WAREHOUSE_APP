import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MARKERS } from "../../assets/data/markers";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  cameraContainer: {
    marginHorizontal: 0, marginLeft: 0, marginStart: 0,
    paddingHorizontal: 0, paddingLeft: 0, paddingStart: 0,
    height: '115%',
    padding: 0
  }
});

class ScannerQR extends React.Component {
  async componentDidMount() {
    await this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
  };

  handleBarCodeScanned = ({ type, data }) => {
    const marker = MARKERS.find((marker) => marker.code === data);
    if (marker) {
      this.props.navigation.navigate(marker.type);
    }
  };

  render() {
    return (
      <View
        style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={styles.cameraContainer}
        />
      </View>
    );
  }
}

export default ScannerQR;
