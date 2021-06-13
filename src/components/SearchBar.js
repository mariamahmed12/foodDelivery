import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons'
const SearchBar=({term,onTermchange,onEndsubmit})=>{
    return(
        <View style={styles.backgroundstyle}>
            <Feather name="search" style={styles.iconstyle}/>
            <TextInput 
            style={styles.inputstyle} 
            placeholder="Find a Restaurant"
            value={term}
            onChangeText={onTermchange}
            onSubmitEditing={onEndsubmit}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    backgroundstyle:{
        backgroundColor:'#ffe6cc',
        borderRadius:5,
        marginHorizontal:'5%',
        marginVertical:'4%',
        flexDirection:"row",
        
    },
    inputstyle:{
        flex:1,
        fontSize:20,
    },
    iconstyle:{
        fontSize:45,
        alignSelf:"center",
        marginHorizontal:'2%'
    }

})

export default SearchBar;
