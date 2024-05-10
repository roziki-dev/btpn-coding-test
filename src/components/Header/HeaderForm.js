import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './HeaderForm.style';
import {color} from '../../styles';

export const HeaderForm = ({onBackPress, title = 'Add New Contact', style}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onBackPress} style={styles.buttonContainer}>
        <Icon name="arrowleft" size={24} color={color.description} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.buttonContainer} />
    </View>
  );
};
