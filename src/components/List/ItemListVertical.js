import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import {styles} from './ItemListVertical.style';

export const ItemListVertical = ({imgUrl, firstName, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View pointerEvents="box-only" style={styles.container}>
        <Image source={{uri: imgUrl}} style={styles.img} />
        <Text numberOfLines={1} style={styles.firstName}>
          {firstName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
