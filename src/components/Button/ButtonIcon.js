import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './ButtonIcon.style';
import {color} from '../../styles';

export const ButtonIcon = ({
  icon = null,
  title = null,
  onPress,
  btnStyle,
  textStyle,
  iconColor,
  disabled,
  loading,
}) => {
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.btn, btnStyle]}
        onPress={onPress}>
        {loading && <ActivityIndicator color={iconColor} size={20} />}
        {!loading && icon && (
          <Icon name={icon} size={20} color={iconColor || color.description} />
        )}
        {icon && title && <View style={{width: 10}} />}
        {title && <Text style={[styles.btnText, textStyle]}>{title}</Text>}
      </TouchableOpacity>
    </>
  );
};
