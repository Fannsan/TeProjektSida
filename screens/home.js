import React from "react";
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, Button, Modal, TextInput, ScrollView} from 'react-native'
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";


const PictureMenu =({picture, pictureDescribed }) =>{
    return(
        <View>
          <View style={styles.pictureboxes}>
          <Image 
          source={picture}
          style= {styles.pix} />
          <Text style={{textAlign: "center", }}>{pictureDescribed}</Text>
          </View>
        </View>
  )}

  

export default function Home ({ navigation} ){

    const [profilIcon, setProfilIcon] = useState(require('../assets/green-tea.png'))

    const [inputValue, setInputValue] = useState('');

    const [modalVisable, setModalVisable] = useState(false)

    const [visibleView, setVisibleView] = useState(false)

    const [name, setName] = useState ("");

    const pressHandles=() =>{
      navigation.push('About') 
    }

    return(
        <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>

   
    <View style={styles.headerView}>
      <View >
      <TouchableOpacity onPress={()=> setModalVisable(true)}>

        <Image style={{width:45,height:45, marginTop:15, marginLeft:-25}}source={require('../assets/list.png')}/>
      </TouchableOpacity>
      </View>
    <Text style={styles.header}>Make tea!</Text>

    <ImageBackground 
    style={{width: 50, height:50, marginTop:8}}
    source={profilIcon}>
       {visibleView &&
          <View style={{height:18, backgroundColor:'white', alignItems:'center', marginTop: 40}}>
            <Text> {name} </Text>
          </View>}
    </ImageBackground>
   
    </View>

    <Modal
     transparent 
      visible={modalVisable}
      animationIn="Left">
      <View style={{alignItems:'left'}}> 
        <View style={styles.modalStyle}>
          <TouchableOpacity onPress={() => setModalVisable(!modalVisable) }> 
            <View style={{alignContent:'flex-start'}}>
            <Image style={{marginTop:20, marginBottom:20, borderColor:'#6FA379',  }}source={require('../assets/close.png')}/>
            </View>  
          </TouchableOpacity>

          <View>
          
          <Text style={styles.modalText}>Profile</Text>
          

          <Text style={styles.modalText} onPress={()=>{ navigation.push('About')}}>About us</Text>
          

          <Text style={styles.modalText} onPress={()=>{ navigation.push('Home')}}>Home</Text>
         
          </View>
            </View>
      </View>
    </Modal>
   

    <View style={{backgroundColor:'white', padding:10, margin: 15, }}>
        <Text>Welcome to Make tea!</Text>
        <Text>In this app you will learn more about the wonderful drink tea. Press a picture of a tea to read more.</Text>
        </View>
      <View style={{flexDirection:"row", flexWrap: "wrap", justifyContent: 'space-evenly'}}>
      
      <TouchableOpacity onPress = {() =>  navigation.push ('Matcha')} >
      <PictureMenu picture={require('../assets/matcha-2356774_640.jpg')} pictureDescribed={"Matcha"} />
      </TouchableOpacity>

      <TouchableOpacity onPress = {() =>  navigation.push ('Puehr')} >
      <PictureMenu picture={require('../assets/pu-erh-tea-1020476_640.jpg')} pictureDescribed={"Pu-ehr"}/>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() =>  navigation.push ('Green')} >
      <PictureMenu picture={require('../assets/tea-623796_640.jpg')} pictureDescribed={"Green"}/>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() =>  navigation.push ('Oolong')} >
      <PictureMenu picture={require('../assets/gunpowdertea.jpg')} pictureDescribed={"Oolong tea"}/>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() =>  navigation.push ('Black')} >
      <PictureMenu picture={require('../assets/tekanna.jpg')} pictureDescribed={"Black tea"}/>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() =>  navigation.push ('Oolong')} >
      <PictureMenu picture={require('../assets/vitttepaimutan.jpg')} pictureDescribed={"White tea"}/>
      </TouchableOpacity>

      </View>

      <View style={{backgroundColor: "#6FA379", width:'100%', height:20, }}>
      </View>


      <StatusBar style="auto" />

      <Button title="Go to About page" 
      onPress={pressHandles}/>
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
      height:80, 
      width: '100%',
      flexDirection: 'row',
      padding:5,
      justifyContent:'space-evenly'
    },
  
    header:{
      fontSize:30, 
      textAlign:'center', 
      fontFamily:'Helvetica', 
      color: 'white',
      marginTop:20,
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

      modalStyle:{
        justifyContent:'flex-start',  
        marginTop:92, 
        alignItems:'center',
        height:'60%', 
        width:'60%', 
        backgroundColor: 'white'
        },

        modalText:{
          marginTop:10, 
          fontSize:20
        }
  
  });