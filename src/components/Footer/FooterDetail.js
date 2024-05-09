import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './FooterDetail.style';

export const FooterDetail = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <LinearGradient
          colors={['#E8873C', '#ED37C2']}
          start={{x: 0, y: -1}}
          end={{x: 1, y: 0}}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Back to home</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
