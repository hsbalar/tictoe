import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

const Square = ({ text, id, handleClick }) => {
  const squareClick = () => {
    if (text) return;
    handleClick(id);
  };

  return (
    <View style={[styles.square, { opacity: text ? 1 : 0.5 }]}>
      <TouchableOpacity style={styles.tile} onPress={() => squareClick()}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  square: {
    width: DeviceWidth * 0.3,
    height: DeviceWidth * 0.3,
    marginBottom: 5,
    marginLeft: 5,
    backgroundColor: '#2196f3',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  tile: {
    height: '100%',
  },
};

export default Square;
