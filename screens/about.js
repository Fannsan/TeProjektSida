import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from "react";
import { useState } from 'react';

export default function About (){

  const [profilIcon, setProfilIcon] = useState(require('../assets/green-tea.png'))

    return(
        <View style={styles.container}>
    <SafeAreaView>
   
    <View style={styles.headerView}>
    <Text style={styles.header}>About Make tea!</Text>

<TouchableOpacity>
    <ImageBackground 
    style={{width: 60, height:60,}}
    source={profilIcon}>
    </ImageBackground>
    </TouchableOpacity>
    </View>

    <View style={{backgroundColor:'white', padding:10, margin: 15, }}>
        <Text>Welcome to Make tea!</Text>
        <Text>In this app you will learn more about the wonderful drink tea. Make tea is a app where you can read about different type of tea. Learn about the rocesses and use a tea timer to clock your favorite tea.</Text>
        </View>
      
      <StatusBar style="auto" />


      </SafeAreaView>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BBF0C5',
      alignItems: '',
      justifyContent: '',
    },
    headerView:{
      backgroundColor:'#6FA379', 
      height:70, 
      width:390,
      flexDirection: 'row',
      padding:10,
      justifyContent:'space-evenly'
    },
  
    header:{
      fontSize:30, 
      textAlign:'center', 
      fontFamily:'Helvetica', 
      color: 'white',
      margin: 10,
    },
    pictureboxes: {
      margin: 10,
      backgroundColor: "#6FA379",
      height:190,
      width:170,
      },
  
    pix:{
      margin:10,  
      height:150,
      width:150,
      },
  
  });