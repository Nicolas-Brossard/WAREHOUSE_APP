import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

class ScannerQR extends React.Component {
  async componentDidMount() {
    await this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
  };

  handleBarCodeScanned = ({ type, data }) => {
    console.log("call")
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  render() {
    return (
      <View
        style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={styles.container}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default ScannerQR;
