import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

import {styles} from './ContactForm.style';
import {FooterDetail, HeaderForm} from '../../components';

const ContactForm = () => {
  const navigation = useNavigation();

  const [img, setImg] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(null);

  useEffect(() => {
    request();
  }, []);

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

  const goBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    });
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
        })
        .catch(e => {
          console.log('err: ', e);
        });
    });
  };

  return (
    <View style={styles.container}>
      <HeaderForm onBackPress={goBack} style={styles.ph16} />
      <ScrollView style={styles.container} contentContainerStyle={styles.body}>
        <TouchableOpacity style={styles.boxUpload} onPress={onSelectImg}>
          {!img && <Text style={styles.textUpload}>Select Photo</Text>}
          {img && <Image source={{uri: img}} style={styles.img} />}
        </TouchableOpacity>

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

        {/* Age */}
        <View style={styles.wrapInput}>
          <Text style={styles.label}>Birthday</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputDate}>Select Date</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterDetail title="Selesai" style={styles.ph16} />
    </View>
  );
};

export default ContactForm;
