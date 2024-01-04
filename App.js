//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
// create a component
const App = () => {
  const [images, setImages] = useState([]);
  const openImagePicker_ImgCrpPiker = () => {
    let imageList = [];

    ImagePicker.openPicker({
      mediaType: 'any',
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 10,
      includeBase64: true,
    })
      .then(response => {
        console.log('Response Got is:', response);
        response.map(image => {
          imageList.push({
            fileName: image.filename,
            path: image.path,
            data: image.data,
          });
        });
        setImages(imageList);
      })
      .catch(e => console.log('Error:', e.message));
  };

  return (
    <View style={styles.container}>
      <Text>App</Text>

      <Button
        title="Open Gallery"
        onPress={() => openImagePicker_ImgCrpPiker()}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
