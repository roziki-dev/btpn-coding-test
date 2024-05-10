import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Empty, FloatingIcon, HeaderHome, ItemList} from '../../components';

// styles
import {styles} from './ListContact.style';
import {color} from '../../styles';
import {getListContact} from '../../store/actions';
import {HorizontalList} from './HorizontalList';

const ListContact = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [dataList, setDataList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {data, message, loading} = useSelector(state => state.getAllContact);

  useFocusEffect(
    useCallback(() => {
      dispatch(getListContact());
    }, []),
  );

  useEffect(() => {
    if (data.length > 0) {
      setDataList(data.reverse());
    }
  }, [data]);

  useEffect(() => {
    if (!loading) {
      setRefreshing(loading);
    }
  }, [loading]);

  const onNavigate = id => {
    requestAnimationFrame(() => {
      navigation.navigate('ContactDetail', {id});
    });
  };

  const _renderItem = ({item, index}) => {
    const fullName = `${item.firstName} ${item.lastName}`;
    return (
      <ItemList
        id={item.id}
        fullName={fullName}
        age={item.age}
        imgUrl={item.photo}
        onPress={() => onNavigate(item.id)}
      />
    );
  };

  const handleSearch = useCallback(
    text => {
      const formattedQuery = text.toLowerCase();

      const filterData = data.filter(item => {
        let value =
          item.firstName.toLowerCase().includes(formattedQuery) ||
          item.lastName.toLowerCase().includes(formattedQuery);
        if (value) {
          return item;
        } else {
          return null;
        }
      });

      if (filterData.length === 0) {
        setDataList([]);
      } else {
        setDataList(filterData.reverse());
      }
    },
    [data],
  );

  const onAddNew = () => {
    requestAnimationFrame(() => {
      navigation.navigate('ContactForm');
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getListContact());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={color.secondary}
        barStyle={'dark-content'}
      />
      <FlatList
        data={dataList}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[color.primary, color.orange, color.title]}
          />
        }
        ListHeaderComponent={
          <HeaderHome
            title={'Contacts'}
            count={dataList.length}
            onChangeText={handleSearch}
            renderHorizontal={<HorizontalList />}
          />
        }
        ListEmptyComponent={
          <Empty
            loading={loading}
            dataLength={dataList.length}
            isSearch={true}
            message={message}
          />
        }
        ItemSeparatorComponent={<View style={styles.separator} />}
        removeClippedSubviews={true}
        initialNumToRender={10}
      />
      <FloatingIcon onPress={onAddNew} />
    </View>
  );
};

export default ListContact;
