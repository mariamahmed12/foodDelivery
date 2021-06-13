import React, {useState}from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image} from 'react-native';

const TextForm=({title,name})=>{
    let marginT=null;
    let Width=null;
    if(title==="First Name"||title==="Last Name")
    {
        marginT=30;
        Width=160
    }
    return(
        <View style={[styles.container,{marginTop:marginT,width:Width}]}>
            <Text style={{fontSize:10,color:"gray"}}>{title}</Text>
            <Text style={{fontSize:24}}>{name}</Text>       
        </View>
    );
}
const styles=StyleSheet.create({
  container:{
      borderColor:"lightgray",
      borderRadius:10,
      borderWidth:2,
      height:60,
      padding:10,
      justifyContent:"center",
      marginVertical:10,
      marginHorizontal:5
      
  }
})

export default TextForm;