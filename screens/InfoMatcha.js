import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Button, ScrollView } from 'react-native';
import { useEffect } from 'react';
import React from "react";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";

export default function Matcha (){

    const [profilIcon, setProfilIcon] = useState(require('../assets/green-tea.png'))

    
  
      return(
          <View style={styles.container}>
      <SafeAreaView>
     <ScrollView>
      <View style={styles.headerView}>
      <Text style={styles.header}>Make tea!</Text>
  
  <TouchableOpacity>
      <ImageBackground 
      style={{width: 60, height:60,}}
      source={profilIcon}>
      </ImageBackground>
      </TouchableOpacity>
      </View>

      <View style={styles.article}>
          <Text style={{fontWeight:'bold', fontSize:18}}>Lets talk about Matcha {"\n"}</Text>
       
          <Text style={styles.textstyle}>Matcha has gained worldwide popularity due to its reputation as a healthy beverage. Matcha is made from shade-grown tea leaves, which are used to produce a higher quality tea.It is a green tea that is ground into a fine powder after production. 
            To prepare matcha, the powder is whisked with a small amount of water to prevent clumping, then more water is added to create the tea. 
            The resulting drink is highly flavorful and has a distinct grassy taste. {"\n"} </Text>

            <Text style={styles.textstyle}> Matcha is rich in antioxidants and nutrients, including catechins, which are a type of flavonoid. It is also a good source of fiber, chlorophyll, and vitamins. {"\n"}</Text>
            
            <Text style={styles.textstyle}>If you are in Japan, it is important to ensure that the matcha you are consuming has been tested for radiation following the Fukushima disaster. 
              The color of the matcha should be a deep, clear green, rather than yellowed. 
              It is best to consume matcha within a year of production, as the tea is sensitive to aging and can lose its flavor and color over time. 
              To preserve its vibrant hue and taste, store matcha in light-tight containers.</Text>
              

          <View style={{borderWidth: 5, borderColor: '#6FA379', borderStyle:'dotted', padding:8 }}>

            <Text style={styles.textstyle}> In addition to its culinary uses, matcha has been used in traditional medicine to improve mental alertness and concentration, boost the immune system, and improve heart health. 
            However, more research is needed to confirm these potential health benefits. </Text>
          </View>
          </View>
        <StatusBar style="auto" />
  
        </ScrollView>
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

      article:{
        backgroundColor:'white', 
        padding:10, 
        margin: 15, 
        
      },

      textstyle:{
        fontSize:18,

      },
  
  });