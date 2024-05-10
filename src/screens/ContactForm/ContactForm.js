import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './ContactForm.style';
import {FooterDetail, HeaderForm} from '../../components';
import {color} from '../../styles';
import {isNumber} from '../../utils/isNumber';
import {
  contactFormClear,
  getContactDetail,
  postContactForm,
  putContactForm,
} from '../../store/actions';
import {checkWhiteSpace} from '../../utils/whiteSpace';

const ContactForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const [img, setImg] = useState(route.params?.photo || null);
  const [firstName, setFirstName] = useState(route.params?.firstName || '');
  const [lastName, setLastName] = useState(route.params?.lastName || '');
  const [errorObject, setErrorObject] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [age, setAge] = useState(
    route.params?.age ? String(route.params?.age) : '',
  );

  const {loading, status, message} = useSelector(state => state.contactForm);

  useEffect(() => {
    request();
  }, []);

  const goBack = useCallback(() => {
    requestAnimationFrame(() => {
      if (route?.params?.id) {
        navigation.navigate('MainRoute');
      } else {
        navigation.goBack();
      }
    });
  }, [navigation, route?.params?.id]);

  useEffect(() => {
    let timeload = null;
    if (status === 201) {
      setImg(null);
      setFirstName('');
      setLastName('');
      setAge('');
      ToastAndroid.show('Success...', ToastAndroid.SHORT);
      goBack();
    } else if (status >= 400) {
      ToastAndroid.show('Something wrong!', ToastAndroid.SHORT);
    }

    if (!loading) {
      timeload = setTimeout(() => {
        setLoadingStatus(false);
      }, 1000);
    }

    return () => {
      dispatch(contactFormClear());
      timeload && clearTimeout(timeload);
    };
  }, [loading, status, message, goBack, dispatch]);

  const request = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      {
        title: 'Album Permission',
        message: 'Cool Photo App needs access to your album ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  };

  const onSelectImg = () => {
    requestAnimationFrame(() => {
      ImagePicker.openPicker({
        mediaType: 'photo',
        width: 400,
        height: 400,
        cropping: true,
        includeBase64: true,
      })
        .then(({data}) => {
          let base64Img = `data:image/jpeg;base64,${data}`;
          setImg(base64Img);
          setErrorObject({});
        })
        .catch(e => {
          console.log('err: ', e);
        });
    });
  };

  const onSubmit = useCallback(() => {
    let errors = {};

    if (!img) {
      errors.img = 'Name is required!';
      return setErrorObject(errors);
    }
    if (!firstName && !lastName) {
      errors.name = 'Name is required!';
      return setErrorObject(errors);
    }

    if (checkWhiteSpace(firstName) || checkWhiteSpace(lastName)) {
      errors.name = 'Invalid is name (only 1 word, no spaces!)';
      return setErrorObject(errors);
    }

    if (!age) {
      errors.age = 'Age is required!';
      return setErrorObject(errors);
    } else if (!isNumber.test(age)) {
      errors.age = 'Invalid Age!';
      return setErrorObject(errors);
    }
    setErrorObject({});

    let body = {
      photo: img,
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    setLoadingStatus(true);

    // edit data contact
    if (route?.params?.id) {
      body.id = route?.params?.id;
      dispatch(putContactForm(body));
    } else {
      // add new data contact
      dispatch(postContactForm(body));
    }
  }, [img, firstName, lastName, age, route.params?.id]);

  return (
    <View style={styles.container}>
      <HeaderForm onBackPress={goBack} style={styles.ph16} />
      <ScrollView style={styles.container} contentContainerStyle={styles.body}>
        <TouchableOpacity
          style={[
            styles.boxUpload,
            {borderColor: errorObject?.img ? color.primary : color.placeholder},
          ]}
          onPress={onSelectImg}>
          {!img && <Text style={styles.textUpload}>Select Photo</Text>}
          {img && <Image source={{uri: img}} style={styles.img} />}
        </TouchableOpacity>
        {errorObject?.img && (
          <Text style={[styles.warning, styles.center]}>
            {errorObject?.img}
          </Text>
        )}
        {/* name */}
        <View style={styles.wrapInput}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
          />
        </View>
        {errorObject?.name && (
          <Text style={styles.warning}>{errorObject?.name}</Text>
        )}

        {/* Age */}
        <View style={styles.wrapInput}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            placeholder="Age"
            style={styles.input}
            onChangeText={setAge}
            value={age}
            maxLength={2}
            keyboardType="number-pad"
          />
        </View>
        {errorObject?.age && (
          <Text style={styles.warning}>{errorObject?.age}</Text>
        )}
      </ScrollView>
      {loadingStatus ? (
        <View style={styles.loadingBottom}>
          <ActivityIndicator color={color.primary} size={32} />
        </View>
      ) : (
        <FooterDetail title="Save" style={styles.ph16} onPress={onSubmit} />
      )}
    </View>
  );
};

export default ContactForm;
