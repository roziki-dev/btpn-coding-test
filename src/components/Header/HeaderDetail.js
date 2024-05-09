import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './HeaderDetail.style';
import {color} from '../../styles';

export const HeaderDetail = ({onBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.buttonContainer}>
        <Icon name="arrowleft" size={24} color={color.description} />
      </TouchableOpacity>
    </View>
  );
};
