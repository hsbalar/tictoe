import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

const Square = ({ text, id, handleClick }) => {
  const style = {
    square: {
      width: DeviceWidth * 0.3,
      height: DeviceWidth * 0.3,
      marginBottom: 5,
      marginLeft: 5,
      backgroundColor: randomHexColor(),
    },
    text: {
      color: 'white',
      fontSize: 50,
      margin: 'auto',
    },
    tile: {
      height: '100%',
    },
  };

  const squareClick = () => {
    if (text) return;
    handleClick(id);
  };

  return (
    <View style={[style.square, { opacity: text ? 1 : 0.4 }]}>
      <TouchableOpacity style={style.tile} onPress={() => squareClick()}>
        <Text style={style.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default Square;
