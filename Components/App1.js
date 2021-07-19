import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Platform, ImageBackground } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import DisplayLove from './DisplayLove.js';

class App extends React.Component {


 submitit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "{API_CODE}",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
    .then(data=>data.json())
    .then(data2=>{
      console.log(data2)
      this.setState({
        result:data2
      })
      
    })
  }

  state={
    fname:'',
    sname:'',
    result:"loading"
  }  

  render(){
  return (
    
    <ImageBackground source={require("./load3.png")} style={styles.container} >
    <View style={styles.view}>
  
     <StatusBar style={{borderRadius:50}} />
      <Appbar.Header>
      <Appbar.Content title="Love % Calculator"
      style={{alignItems:"center"}}
      />
    </Appbar.Header>
     <TextInput
      label="Male"
      value={this.state.fname}
      style={{marginTop:30,opacity:0.9, marginHorizontal:10}}
      onChangeText={text => this.setState({fname:text})}

    />      
     <TextInput
      label="Female"
      value={this.state.sname}
      style={{marginVertical:10,opacity:0.9,marginHorizontal:10}}
      onChangeText={text => this.setState({sname:text})}
    />    
    
    <Button  
    mode="contained" 
    style={{margin:20, height:50, justifyContent:'center', borderRadius:20}}
    onPress={() => this.submitit()}>
    Calculate 
  </Button>
    
     <DisplayLove displaydata={this.state.result}/>
    

   
    </View>
    </ImageBackground> 
    
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    

    width: null,
    height: null,
    
  
  
    
  },
 
 
});
