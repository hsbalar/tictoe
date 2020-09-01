import React from 'react';
import Square from './Square/Sqaure';
import { Dimensions, View } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

const Board = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
        }}
      >
        <View>
          <Square />
          <Square />
          <Square />
        </View>
        <View>
          <Square />
          <Square />
          <Square />
        </View>
        <View>
          <Square />
          <Square />
          <Square />
        </View>
      </View>
    </View>
  );
};

export default Board;
