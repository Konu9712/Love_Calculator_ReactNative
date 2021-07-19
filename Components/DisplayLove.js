import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card.js'


const DisplayLove = (prop) =>{
   
     if(prop.displaydata=="loading"){
        return (
                        
          <Image source={require("./load.gif")} style={styles.loadingcard}/>
                        
                   )
    }
    else{
            return(
                
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.text}>Love between you two is {prop.displaydata.percentage} %</Text>
                <Text style={styles.text}>{prop.displaydata.result}</Text>
            </Card>
        </View>
                 )
        }
}
export default DisplayLove;

const styles = StyleSheet.create({
    container: {
      
      
      alignItems:'center',
    },
    card:{
    
        alignItems:'center',
        width:'90%',
        height:120,
        marginTop:20,
        opacity:0.7
    },
    loadingcard:{

        alignItems:'center',
        width:'60%',
        height:200,
        
        justifyContent:'center',
        marginHorizontal:80
    },
    text:{
        fontSize:30
    }
  });