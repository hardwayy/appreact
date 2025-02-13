import React from 'react';
import { View, Image, Text, ImageSourcePropType, StyleSheet } from 'react-native';

interface ImageComponentProps {
  imgsrc: ImageSourcePropType;
  title: string; 
  description: string; 
}

const TitleController: React.FC<ImageComponentProps> = ({ imgsrc, title, description }) => {
  return (
    <View style={styles.container}>
      <Image source={imgsrc} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 10, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'gray'
  },
  description: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },

});

export default TitleController;
