import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const ResultDetails=({result})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.imagestyle} source={{uri:result.image_url}}/>
            <Text style={{fontWeight:'bold'}}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        marginLeft:5,
        marginBottom:10
        },
    imagestyle:{
        width:300,
        height:120,
        borderRadius:4,

    }

})

export default ResultDetails;