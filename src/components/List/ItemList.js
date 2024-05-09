import React from 'react';
import {Image, Text, View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './ItemList.style';
import {color} from '../../styles';

export const ItemList = ({imgUrl, fullName, age}) => {
  return (
    <TouchableNativeFeedback>
      <View pointerEvents="box-only" style={styles.container}>
        <Image source={{uri: imgUrl}} style={styles.img} />
        <View style={styles.center}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.age}>Age {age}</Text>
        </View>
        <View>
          <Icon name="ellipsis1" size={20} color={color.placeholder} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
