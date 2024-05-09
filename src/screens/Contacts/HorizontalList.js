import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ItemListVertical} from '../../components';
import {styles} from './HorizontalList.style';

export const HorizontalList = ({}) => {
  const navigation = useNavigation();

  const {loading, status} = useSelector(state => state.getAllContact);
  const {data} = useSelector(state => state.lastSeen);

  const onNavigate = id => {
    requestAnimationFrame(() => {
      navigation.navigate('ContactDetail', {id});
    });
  };

  const _renderItem = ({item, index}) => {
    return (
      <ItemListVertical
        id={item.id}
        firstName={item.firstName}
        age={item.age}
        imgUrl={item.photo}
        onPress={() => onNavigate(item.id)}
      />
    );
  };

  return (
    <>
      {!loading && data.length > 0 && (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBody}>Last Seen</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={item => `${item.id}-hz`}
            renderItem={_renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      )}
    </>
  );
};
