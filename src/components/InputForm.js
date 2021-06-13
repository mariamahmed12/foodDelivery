import React, {useState}from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image} from 'react-native';

const InputForm=({title,change,prop,check,secureTextEntry})=>{
    const [load,setLoad]=useState(false)
    const [place,setplace]=useState(title)
    const [marginImage,setmarginImage]=useState(8)
    const [secure,setSecure]=useState(secureTextEntry)
    let marginT=null;
    let Width=null;
    let flexD=null;
    return(
        <View style={styles.container}>
            {load?<Text style={{fontSize:10,color:"gray"}}>{title}</Text>:null}
            <View style={{flexDirection:flexD,flex:3}}> 
            <TextInput
            secureTextEntry={secure}
            value={prop}
            onFocus={()=>{
                setLoad(true)
                setplace("")
                setmarginImage(0)
            }}
            onKeyPress={()=>check()}
            onChangeText={change}
            style={{fontSize:18,marginTop:0,flex:2}}
            placeholder={place}
            > 
            </TextInput>

            </View>
           
           
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

export default InputForm;