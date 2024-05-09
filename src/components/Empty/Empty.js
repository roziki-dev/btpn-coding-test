import React, {useMemo} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './Empty.style';
import {color} from '../../styles';

export const Empty = ({loading, isSearch}) => {
  const TitleEmpty = useMemo(() => {
    if (isSearch) {
      return 'No Results Found';
    }
    return 'No Contacts';
  }, [isSearch]);

  const MessageEmpty = useMemo(() => {
    if (isSearch) {
      return 'Try again with another name';
    }
    return 'You have no contacts, add one';
  }, [isSearch]);

  const IconEmpty = useMemo(() => {
    if (isSearch) {
      return 'search1';
    }
    return 'file1';
  }, [isSearch]);

  return (
    <View style={styles.container}>
      {!loading ? (
        <View style={styles.contentLoading}>
          <View style={styles.iconEmpty}>
            <Icon name={IconEmpty} size={50} color={color.orange} />
          </View>
          <Text style={styles.titleEmpty}>{TitleEmpty}</Text>
          <Text style={styles.messageEmpty}>{MessageEmpty}</Text>
        </View>
      ) : (
        <View style={styles.contentLoading}>
          <ActivityIndicator size="large" color={color.primary} />
          <Text style={styles.TextLoading}>Loading...</Text>
        </View>
      )}
    </View>
  );
};
