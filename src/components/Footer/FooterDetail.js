import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './FooterDetail.style';

export const FooterDetail = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnTitle}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};
