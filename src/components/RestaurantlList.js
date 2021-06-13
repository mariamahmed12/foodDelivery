import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity}from 'react-native'
import ResultDetails from './ResultDetails';
import {useNavigation} from '@react-navigation/native'
const RestaurantList=({title,results,horizontal})=>{
    const navigation = useNavigation();
    return(
        <View style={styles.containerstyle}> 
            <Text style={styles.titlestyle}>{title}</Text>
            <FlatList
              horizontal={horizontal}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={results}
              keyExtractor={result=>result.id}
              renderItem={({item})=>{
                  return <TouchableOpacity onPress={()=>{navigation.navigate('Menu',{id:item.id})}}>
                      <ResultDetails result={item}/>
                  </TouchableOpacity>
                  
              }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    containerstyle:{
        marginHorizontal:'5%',
    },
    titlestyle:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:'2%'
    }
})

export default RestaurantList;