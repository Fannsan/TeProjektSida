import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Button } from 'react-native';
import React from "react";
import { useState } from 'react';

export default function LogIn (){

  const [profilIcon, setProfilIcon] = useState(require('../assets/green-tea.png'))
  const [inputValue, setInputValue] = useState('');

    return(
        <View style={styles.container}>
    <SafeAreaView>
   
    <View style={styles.headerView}>
    <Text style={styles.header}>Log in on Make tea!</Text>

<TouchableOpacity>
    <ImageBackground 
    style={{width: 60, height:60,}}
    source={profilIcon}>
    </ImageBackground>
    </TouchableOpacity>
    </View>

    <View style={{backgroundColor:'white', padding:10, margin: 15, }}>
        <Text>Welcome to Make tea!</Text>
        <Text>Here you can login to start your membership on Make tea. If you login you will be able to sve your favorite teas on your profile.{"\n"}</Text>
        
        <Text>Write your name and password and submit.{"\n"}</Text>
          <></>
          <Text>Name:</Text>
          <TextInput
          style={{borderWidth:1, width:150, margin:10, padding:8, color:'lightGray'}}
          placeholder='Enter name'
          value={inputValue}
          onChangeText={(value)=> setInputValue(value)} />
          <Text>Password:</Text>
          <TextInput 
          secureTextEntry
          style={{borderWidth:1, width:150, margin:10, padding:8, color:'lightGray'}}
          placeholder='Enter password'/>
        
          <Button
          title='Submit'
          onPress={() => {
          inputValue == ""? setName("guest") : setName(inputValue) 
          inputValue == ""? setVisibleView(false) : setVisibleView(true)
          
          }} 
          />
       
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
      fontSize:25, 
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