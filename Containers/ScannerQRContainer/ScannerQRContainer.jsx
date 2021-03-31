import React from 'react';
import ScannerQR from "../../Components/ScannerQRComponent";
import {useNavigation} from "@react-navigation/core";

const ScannerQRContainer = (props) => {
  const navigation = useNavigation();
  return <ScannerQR navigation={navigation} {...props} />;
}

export default ScannerQRContainer;
