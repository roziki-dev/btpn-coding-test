import React, {useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ItemListVertical} from '../../components';
import {styles} from './HorizontalList.style';

export const HorizontalList = ({}) => {
  const navigation = useNavigation();

  const {data, loading, status} = useSelector(state => state.getAllContact);
  const dataLastSeen = useSelector(state => state.lastSeen);

  const onNavigate = id => {
    requestAnimationFrame(() => {
      navigation.navigate('ContactDetail', {id});
    });
  };

  const _renderItem = ({item, index}) => {
    return (
      <ItemListVertical
        id={item?.id}
        firstName={item?.firstName}
        age={item?.age}
        imgUrl={item?.photo}
        onPress={() => onNavigate(item.id)}
      />
    );
  };

  const dataArray = useMemo(() => {
    if (data.length > 0) {
      return dataLastSeen?.data
        .map(o => {
          let index = data.findIndex(f => f.id === o.id);
          if (index > -1) {
            return data[index];
          }
        })
        .filter(item => typeof item === 'object');
    }
    return [];
  }, [dataLastSeen?.data, data]);

  return (
    <>
      {dataArray.length > 0 && (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBody}>Last Seen</Text>
          </View>
          <FlatList
            data={dataArray}
            keyExtractor={(item, index) => `${index}-hz`}
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
