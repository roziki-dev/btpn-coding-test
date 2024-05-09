import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Empty, HeaderHome, ItemList} from '../../components';

// styles
import {styles} from './ListContact.style';
import {color} from '../../styles';
import {getListContact} from '../../store/actions';
import {HorizontalList} from './HorizontalList';

const ListContact = () => {
  const dispatch = useDispatch();

  const [dataList, setDataList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {data, message, loading} = useSelector(state => state.getAllContact);

  useEffect(() => {
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      setDataList(data);
    }
  }, [data]);

  useEffect(() => {
    if (!loading) {
      setRefreshing(loading);
    }
  }, [loading]);

  const _renderItem = ({item, index}) => {
    const fullName = `${item.firstName} ${item.lastName}`;
    return (
      <ItemList
        id={item.id}
        fullName={fullName}
        age={item.age}
        imgUrl={item.photo}
      />
    );
  };

  const handleSearch = useCallback(
    text => {
      const formattedQuery = text.toLowerCase();

      const filterData = data.filter(item => {
        let value = item.firstName.toLowerCase().includes(formattedQuery) || item.lastName.toLowerCase().includes(formattedQuery);
        if (value) {
          return item;
        } else {
          return null;
        }
      });

      if (filterData.length === 0) {
        setDataList([]);
      } else {
        setDataList(filterData);
      }
    },
    [data],
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getListContact());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'} />
      <FlatList
        data={!dataList}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[color.primary, color.orange, color.title]} />
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
          <Empty loading={loading} dataLenght={dataList.length} isSearch={true} message={message} />
        }
        ItemSeparatorComponent={<View style={styles.separator} />}
        removeClippedSubviews={true}
        initialNumToRender={10}
      />
    </View>
  );
};

export default ListContact;
