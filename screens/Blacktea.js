import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Button, ScrollView } from 'react-native';
import React from "react";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

export default function Black (){

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
      <Text style={styles.header}> Make tea!</Text>
  
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
          <Text style={{fontSize:18, fontWeight:'bold'}}>Lets talk about black tea{"\n"}</Text>
       
          <Text style={styles.textstyle}>Svart te är nog den te-sort vi vanligtvis associerar med te när vi pratar om det. 
          Svart te är oxiderat till cirka 90-95%, man plockar de unga bladen och antingen handrullas dem eller så används maskiner som skadar bladen och frigör de naturliga oljorna som gör att tet oxideras. 
          Tet blir på grund av oxideringen mustigare i smaken. Det svarta tet är även mörkare i färgen än de andra tesorterna förutom Pu-erh.{"\n"} </Text>
            <></>
            <Text style={styles.textstyle}>
            Detta te är som det låter mörk i sin färg, generellt kraftig i sin smak och har ofta många olika variationer av smaker. Därav dess stora popularitet. 
            När vi går in i affären kan vi hitta mängder av olika paket med smaker alltifrån Earl gray till jordgubbar och grädde.
            {"\n"} 
            </Text>
            <Text style={styles.textstyle}>
            Svart te har ett klassificeringssystem på bladen vilket inga av de andra tesoerterna använder sig av. Detta klassificeringssystem förklarar bladens utseende men inte dess arom och smak. 
            Detta klassificeringssystem används i Indien, Srilanka och Kenya. Köper du te från dessa länder kan du hitta dessa benämningar.
            {"\n"}</Text>

            <View style={{borderWidth: 5, borderColor: '#6FA379', borderStyle:'dotted', }}>

            <Text style={styles.textstyle}> Fun fact: I Kina benämns Svart te istället för rött te på grund av dess röda ton när den läggs i vatten.</Text>
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