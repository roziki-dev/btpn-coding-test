import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonIcon, FooterDetail, HeaderDetail} from '../../components';

import {styles} from './ContactDetail.style';
import {
  contactDetailClear,
  getContactDetail,
  getListContact,
} from '../../store/actions';
import {color} from '../../styles';

const ContactDetail = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const {data, message, loading} = useSelector(state => state.contactDetail);
  useEffect(() => {
    const id = route.params?.id;
    if (id) {
      dispatch(getContactDetail(id));
    }
    return () => {
      dispatch(contactDetailClear());
      dispatch(getListContact());
    };
  }, [route.params.id]);

  const goBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    });
  };

  const fullName = `${data?.firstName || ''} ${data?.lastName || ''}`;

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
              // title={'Delete'}
              iconColor={color.white}
              btnStyle={{backgroundColor: color.orange}}
              textStyle={{color: color.white}}
            />
          </View>
        </View>
        <FooterDetail onPress={goBack} />
      </View>
    </View>
  );
};

export default ContactDetail;
