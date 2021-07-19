import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View, Image, Platform, ImageBackground } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import {Picker} from '@react-native-community/picker'

import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StatusBar } from 'expo-status-bar';
import  App1  from './Components/App1.js'

function HomeScreen({ navigation }) {

   const [selectedValue, setSelectedValue] = useState("Aries");

      const [date, setDate] = useState(new Date(1598051730000));
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);
    
      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

      const showTimepicker = () => {
        showMode('time');
      };
  
  return(
        
        <ImageBackground source={require("./Components/load3.png")} style={styles.container} >
    <View style={styles.view}>   
  <StatusBar style={{borderRadius:60}} />
  <Appbar.Header>
      <Appbar.Content title="Enter your Details "
      style={{alignItems:"center",}}
      />
      
    </Appbar.Header>
          <TextInput
      label="First name"
      style={{margin:20,opacity:0.85, marginVertical:20}}
      
           />  
            <TextInput
      label="Last name"
      style={{margin:20,opacity:0.85}}
      
           /> 
           
           
           
           
            <Picker
        selectedValue={selectedValue}
        style={{ height: 65, width: '90%',backgroundColor:'lightgrey',marginLeft:20,marginTop:10,opacity:0.85}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Aries                       मेष                   (Mesh)	" value="Aries" />
        <Picker.Item label="Taurus                  वृषभ                 (Vrushabh)" value="Taurus" />
        <Picker.Item label="Gemini                  मिथुन               (Mithun)" value="Gemini" />
        <Picker.Item label="Cancer                   कर्क                  (Kark)" value="Cancer" />
        <Picker.Item label="Leo                            सिंह                  (Sinh)" value="Leos" />
        <Picker.Item label="Virgo                       कन्या                 (Kanya)" value="Virgo" />
        <Picker.Item label="Scorpius                वृश्चिक               (Vrushchik)" value="Scorpius" />
        <Picker.Item label="Sagittarius            धनु                    (Dhanu)" value="Sagittarius" />
        <Picker.Item label="Capricornus	         मकर                 (Makar)	" value="Capricornus" />
        <Picker.Item label="Aquarius	               कुंभ                  (Kumbha)" value="Aquarius" />
        <Picker.Item label="Pisces	                    मीन                  (Meen)		" value="Piscess" />
 
      </Picker>

      <View>
        <Button onPress={showDatepicker} 
         style={{margin:20, height:50, justifyContent:'center', borderRadius:20,marginTop:30,opacity:0.9}}
        mode="contained" >Date OF Birth</Button>
    
    <Button 
      style={{margin:20, height:50, justifyContent:'center', borderRadius:20,marginTop:30,opacity:0.9}}
      mode="contained"
      onPress={() => navigation.navigate('Details')}
     >Submit</Button>
    
      </View>

   
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      </View>
      </ImageBackground>      
              

  );
}

function DetailsScreen() {
  return (
    <View>
      <App1/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name=" "  component={HomeScreen}  />
       
       
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    width: null,
    height: null,
    
    
    
  },
  

});
