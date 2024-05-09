import React, {useEffect} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderHome, ItemList} from '../../components';

// styles
import {styles} from './ListContact.style';
import {color} from '../../styles';
import {getListContact} from '../../store/actions';
import {HorizontalList} from './HorizontalList';

const ListContact = () => {
  const dispatch = useDispatch();
  const {data, message, loading} = useSelector(state => state.getAllContact);

  useEffect(() => {
    dispatch(getListContact());
  }, [dispatch]);

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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'} />
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={
          <HeaderHome
            title={'Contacts'}
            count={data.length}
            renderHorizontal={<HorizontalList />}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {loading ? 'Loading...' : message}
            </Text>
          </View>
        }
        ItemSeparatorComponent={<View style={styles.separator} />}
        removeClippedSubviews={true}
        initialNumToRender={10}
      />
    </View>
  );
};

export default ListContact;
