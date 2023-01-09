import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,Button, Vibration, ScrollView , } from 'react-native';
import React from "react";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

export default function Puehr (){

    const [profilIcon, setProfilIcon] = useState(require('../assets/green-tea.png'))

    const [timeLeft, setTimeLeft] = useState(240)
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
            // Reset the timer to 4 minutes when the "Reset" button is clicked
            setTimeLeft(120);
            setIsRunning(false); }}/>

       
      </View >
     </View>
  
      <View style={styles.article}>
          <Text style={{fontWeight:'bold', fontSize:18}}> Lets talk about Pu-ehr {"\n"}</Text>
       
          <Text style={styles.textstyle}>Pu-erh tet är ett väldigt smakrikt och kraftigt och görs med plantan Camellia Sinensis kultivar Assemica. 
            De vanliga tet görs som jag tidigare nämnt med en kultivaren Sinensis vilket gör att Pu-reh tet blir annorlunda i smaken.  
            Pu-erh te finns som grönt te (Sheng) och svart te (Shu). Puh-erh kommer från Yuanna Provinsen i Kina där. 
            Det som skiljer teplantan som man gör Pu-erh te från de vanliga tebuskarna är att dessa tillåts bli kraftiga och kan vara flera hundra år och har kraftiga rötter som skapar en mustig smak i bladen. {"\n"} </Text>
            <></>
            <Text style={styles.textstyle}>Träden växer även mer i det vilda och man låter dem växa att bli högre än den vanliga teplantan som man försöker hålla vid midjehöjd för lättast plockning.  
                    Efter det att löven gått igenom den första processen det vill säga oxiderats eller inte oxiderats har även Pu-erh tet en annan process så kallad fermentering. 
            </Text>
            <Text style={styles.textstyle}>Om Tet ska fermentera på traditionellt vis tar fermenteringen normalt sätt 20-25 år. Idag använder man däremot lager lokaler som man hettar upp och gör att fermenteringen går fortare.</Text>
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