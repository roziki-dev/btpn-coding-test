import React, {useCallback, useEffect} from 'react';
import {Alert, Image, StatusBar, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonIcon, Empty, FooterDetail, HeaderDetail} from '../../components';

import {styles} from './ContactDetail.style';
import {
  contactDetailClear,
  deleteContact,
  getContactDetail,
  getListContact,
} from '../../store/actions';
import {color} from '../../styles';

const ContactDetail = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const {data, status, loading} = useSelector(state => state.contactDetail);
  const dataDelete = useSelector(state => state.deleteContact);

  useEffect(() => {
    const id = route.params?.id;
    if (id) {
      dispatch(getContactDetail(id));
    }

    return () => {
      dispatch(contactDetailClear());
      dispatch(contactDetailClear());
      dispatch(getListContact());
    };
  }, [route.params.id]);

  useEffect(() => {
    if (dataDelete?.status === 200 || dataDelete?.status === 201) {
      goBack();
    }
  }, [dataDelete]);

  const goBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    });
  };

  const fullName = `${data?.firstName || ''} ${data?.lastName || ''}`;

  const onDelete = useCallback(() => {
    const id = data?.id;
    Alert.alert('Are you sure?', `Delete this contact name ${fullName}`, [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(deleteContact(id));
        },
      },
    ]);
  }, [data]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <HeaderDetail onBackPress={goBack} />
      <View style={styles.background}>
        {data?.photo && (
          <Image
            source={{
              uri: data?.photo,
            }}
            style={styles.img}
          />
        )}
        <BlurView
          style={styles.absolute}
          blurType="materialLight"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        />
      </View>

      {loading || status !== 200 ? (
        <View style={styles.body}>
          <Empty isSearch={true} loading={loading} />
        </View>
      ) : (
        <View style={styles.body}>
          {data?.photo && (
            <View style={styles.photoContainer}>
              <Image
                source={{
                  uri: data?.photo,
                }}
                style={styles.photoProfile}
              />
            </View>
          )}
          <View style={{flex: 1}}>
            <Text style={styles.name}>
              {fullName},<Text style={styles.age}> {data?.age || ''}</Text>
            </Text>
            <View style={styles.flexHorizontal}>
              <ButtonIcon icon={'edit'} title={'Edit Contact'} />
              <ButtonIcon
                icon={'delete'}
                iconColor={color.white}
                btnStyle={{backgroundColor: color.orange}}
                onPress={onDelete}
                disabled={dataDelete?.loading}
                loading={dataDelete?.loading}
              />
            </View>
          </View>
          <FooterDetail onPress={goBack} />
        </View>
      )}
    </View>
  );
};

export default ContactDetail;
