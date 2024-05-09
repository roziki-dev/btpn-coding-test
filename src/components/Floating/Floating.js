import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './Floating.style';
import {color} from '../../styles';

export const FloatingIcon = ({onPress, btnStyle, disabled}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.btn, btnStyle]}
        onPress={onPress}>
        <LinearGradient
          colors={['#E8873C', '#ED37C2']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.btn}>
          <Icon name="adduser" size={28} color={color.white} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
