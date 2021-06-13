import React from 'react'
import { View,StyleSheet,Image,TouchableOpacity,Text } from 'react-native';
import TextForm from '../components/textForm'
const ProfileScreen=()=>{
    const firstname="mohamed"
    const lastname="ahmed"
    const email="mohamed@gmail.com"
    const profileImg=''
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <TouchableOpacity  activeOpacity={0.8}>
                {profileImg ? (
                <Image source={{ uri: profileImg }} style={styles.img} resizeMode="cover" />
                ) : (
                <View
                    style={[
                    styles.img,
                    { backgroundColor:"darkgray",justifyContent: 'center', alignItems: 'center' },
                    ]}
                >
                    <Text style={styles.name}>{firstname.charAt(0)}</Text>
                </View>
                )}
           </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={{justifyContent: 'center', alignItems: 'center'}}
            >
             <Text style={{fontSize:25,color:"orange"}}>Change Photo</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row-reverse"}}>
              <TextForm title="First Name" name={firstname} />
              <TextForm title="Last Name"  name={lastname}/>
            </View>
            <TextForm title="Email Address" name={email}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    imgContainer:{
        height: 124,
        width: 124,
        borderRadius: 62,
        borderWidth: 2,
        borderColor:"white",
        marginTop:30,
        alignSelf:"center"
    },
    img:{
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    name:{
        fontSize: 50,
        fontWeight: "bold",
        color:"white"
    },
    editImgContainer:{
          height: 40,
          width: 40,
          borderRadius: 20,
          position: "absolute",
          right: 10,
          bottom: 10,
    }
});

export default ProfileScreen;
