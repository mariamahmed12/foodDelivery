import React ,{useState}from 'react';
import InputForm from '../components/InputForm.js';
import { Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {LoginRequest,SignupRequest,AddUser} from '../network';
import firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import {useNavigation} from '@react-navigation/native'

const LoginScreen=()=>{
    const navigation = useNavigation();
    const [SigninForm,setSigninForm]=useState({
        email:'',
        password:'',
    });
    const {email,password}=SigninForm;
    const [disabled,setDisabled]=useState("true");
    const handleOnchange=(Name,value)=>{
        setSigninForm({
            ...SigninForm,[Name]:value
        })
    }

    const checkValid=()=>{
        
        if(email!==""&&password!="")
        {  
            setDisabled("false")
        }
        else{
            setDisabled("true")
        }
    }
    const onSigninPress=()=>{
        LoginRequest(email,password)
        .then((res)=>{
            if(!res.additionalUserInfo)
            {
                 alert(res)
                 return;
            }
            setSigninForm({email:"",password:""})
            navigation.navigate("Taps");
        })
        .catch((err)=>{
            
            alert(err)
        })

    }
    const onSignUpPress=()=>{
      SignupRequest(email,password)
           .then((res)=>{
               if(!res.additionalUserInfo)
               {
                    alert(res)
                    return;
               }
               let uid=firebase.auth().currentUser.uid
               let profileImg='';
               AddUser('Mariam','Ahmed',email,password,uid,profileImg)
               .then(()=>{
                    console.log('done')
                    navigation.navigate("Taps");

               })
               .catch((err)=>{
                alert(err);
            })
           })
           .catch((err)=>{
               alert(err);
           })
        }

        const loginwithFacebook=async()=>{
          try {
            await Facebook.initializeAsync({
              appId: '541514743524744',
            });
            const {type,token } = await Facebook.logInWithReadPermissionsAsync({
              permissions: ['public_profile'],
            });
            if (type === 'success') {
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
              const result=firebase.auth.FacebookAuthProvider.credential(token)
              firebase.auth().signInWithCredential(result)
              .then((res)=>{
                  console.log(res)
              })
              .catch((error)=>{
                console.log(error)
              })
            } else {
              // type === 'cancel'
            }
          } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
          }
          
        }
        
        
  
    return(  
        <View style={styles.container}>
            <InputForm title="Email Address" check={checkValid} 
            change={(val)=>handleOnchange('email',val)} prop={email}/>
            <InputForm title="Password" check={checkValid} 
            change={(val)=>handleOnchange('password',val)} prop={password} secureTextEntry={true}/>
            {disabled==="true"?<TouchableOpacity disabled={true} 
            style={[styles.opacityStyle,{opacity:0.6}]}  
            >
            <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:20}}>Login </Text>
            </TouchableOpacity>:<TouchableOpacity disabled={false} 
            style={styles.opacityStyle} 
            onPress={()=>onSigninPress()} 
            >
            <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:20}}>Login</Text>
            </TouchableOpacity>}
            {disabled==="true"?<TouchableOpacity disabled={true} 
            style={[styles.opacityStyle,{opacity:0.6}]}  
            >
            <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:20}}>Sign Up</Text>
            </TouchableOpacity>:<TouchableOpacity disabled={false} 
            style={styles.opacityStyle} 
            onPress={()=>onSignUpPress()} 
            >
            <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:20}}>Sign Up</Text>
            </TouchableOpacity>}
            <TouchableOpacity disabled={false} 
            style={styles.opacityStyle} 
            onPress={()=>loginwithFacebook()} 
            >
            <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:20}}>Login with facebook</Text>
            </TouchableOpacity>
           

        </View>
       
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        marginVertical:40,
        marginHorizontal:20
    },
    opacityStyle:{
        backgroundColor:'orange',
        borderRadius:10,
        marginVertical:5,
        marginHorizontal:10,
        padding:15

    }
});

export default LoginScreen;