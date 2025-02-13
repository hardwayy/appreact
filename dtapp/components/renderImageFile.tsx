import { PropsWithChildren, useState } from 'react';
import React from 'react';
import { View, Image, Text, ImageSourcePropType, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import  TitleController from './titlecontroller';
interface renderImageFile {
    length: number;
}


const renderImageFile: React.FC<renderImageFile>=({length})=>{
    const Items= Array.from({length},(_,index)=> index+1);
    return (

        <View style={styles.container}>
            {Items.map((item)=>(
                <TitleController imgsrc={require("@/images/download.jpg")} title={"wow"} description={''}></TitleController>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    item: {
      margin: 10,
      padding: 20,
      backgroundColor: '#ddd',
      borderRadius: 5,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default renderImageFile;