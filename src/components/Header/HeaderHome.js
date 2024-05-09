import {Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './HeaderHome.style';
import {color} from '../../styles';

export const HeaderHome = ({title, count, renderHorizontal}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <View style={styles.search}>
          <Icon name="search1" size={20} color={color.placeholder} />
          <TextInput
            placeholder="Search name here..."
            selectionColor={color.placeholder}
            style={styles.searchInput}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            placeholderTextColor={color.placeholder}
          />
        </View>
      </View>
      {renderHorizontal}
      <View style={styles.titleBodyContainer}>
        <Text style={styles.titleBody}>My Contacts ({count})</Text>
      </View>
    </View>
  );
};
