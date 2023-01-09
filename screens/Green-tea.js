import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Button, ScrollView } from 'react-native';
import React from "react";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

export default function Green (){

    const [profilIcon, setProfilIcon] = useState(require('../assets/green-tea.png'))

    const [timeLeft, setTimeLeft] = useState(120)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=> {
      
      let interval = null;
      if (isRunning && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);
      } else if (isRunning && timeLeft === 0) {
        Vibration.vibrate(); // vibrate the device when the countdown reaches 0
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

 

// Calculate the minutes and seconds from the total number of seconds
  const minutes = Math.floor(timeLeft / 60);
  const remainingSeconds = timeLeft % 60;

// Add leading zeros if the minutes or seconds are single digits
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  
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

      <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'white', padding:30, margin: 15, alignItems:'center', borderRadius:100, width:'40%', }}>
          <Text style={{fontSize:30, }}> {formattedMinutes}:{formattedSeconds}</Text>
          <Button title="Start" onPress={ () => {
            // Start the timer when the "Start" button is clicked
            setTimeLeft(120);
            setIsRunning(true);
            }} />

          <Button title="Reset"  onPress = {() => {
            // Reset the timer to 2 minutes when the "Reset" button is clicked
            setTimeLeft(120);
            setIsRunning(false); }}/>

        </View >
      </View>
  
  
      <View style={styles.article}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>Lets talk about Green tea{"\n"}</Text>
       
          <Text style={styles.textstyle}>Green tea uses the small, new leaves and shoots of the tea plant. Green tea, like white tea, is not oxidized. 
          When buying green tea, make sure it is not brown and damaged, as this means the tea has been oxidized. 
          There are two different treatment methods for green tea to prevent oxidation: heating in pans (in China) or steaming (in Japan).{"\n"} </Text>
            <></>
            <Text style={styles.textstyle}>Green tea have higher caffeine content than other teas. You get a feeling of being alert but relaxed at the same time. 
            Green tea is therefore perfect to drink in the morning to maintain calm in the morning but still feel more awake.{"\n"} 
            </Text>
            <Text style={styles.textstyle}>It is best to drink green tea within two years of production, as it loses its taste afterwards. {"\n"}</Text>

            <View style={{borderWidth: 5, borderColor: '#6FA379', borderStyle:'dotted', }}>

            <Text style={styles.textstyle}> Gunpowder tea is a classic green tea that is grown in China, where the leaves are tightly rolled, resembling gunpowder. 
            It is believed that the tea gets its name from this appearance.
              {"\n"}Another theory about the origin of the name is that it may have been an English speaker who misheard the name when it was first introduced, as "Gang pào de" means "newly-fired gunpowder" in Chinese. 
              In China, this tea is called Zhû cha, which means "pearl tea." Much more beautiful than Gunpowder, right? </Text>
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