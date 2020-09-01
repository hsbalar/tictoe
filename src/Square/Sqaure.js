import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
const DeviceWidth = Dimensions.get('window').width;

const Square = () => {
  const sqStyle = {
    width: DeviceWidth * 0.3,
    height: DeviceWidth * 0.3,
    marginBottom: 1,
    backgroundColor: randomHexColor(),
  };
  return (
    <View style={sqStyle}>
      <Button onPress={() => {}} title="" />
    </View>
  );
};

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default Square;
