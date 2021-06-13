import React,{useState} from 'react';
import {View,Text,Button,ActivityIndicator,Alert,StyleSheet} from 'react-native';
import * as Location from 'expo-location';
const LocationScreen=()=>{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
   const getLocationHandler= async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    }
    return(
        <View style={styles.container}>
          <View style={styles.mapPreview}>
            <Text>No location chosen yet!</Text>
          </View>
          <Button 
          title="Get Your Location" 
          color="orange"
          onPress={getLocationHandler}
          />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal:'2%'
    },
    mapPreview:{
      marginBottom:10,
      width:'100%',
      height:'80%',
      borderColor:'#ccc',
      borderWidth:1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default LocationScreen;