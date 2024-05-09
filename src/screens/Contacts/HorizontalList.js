import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './HorizontalList.style';
import {useSelector} from 'react-redux';
import {ItemListVertical} from '../../components';

export const HorizontalList = ({}) => {
  const {data, message, loading} = useSelector(state => state.getAllContact);

  const _renderItem = ({item, index}) => {
    return (
      <ItemListVertical
        id={item.id}
        firstName={item.firstName}
        age={item.age}
        imgUrl={item.photo}
      />
    );
  };

  return (
    <>
      {data.length > 0 && (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBody}>Last Seen</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
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
