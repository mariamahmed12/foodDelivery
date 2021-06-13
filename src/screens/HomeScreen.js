import React,{useState}from 'react';
import { View,Text,ScrollView } from 'react-native';
import SearchBar from './../components/SearchBar';
import useResult from '../hooks/useResult';
import RestaurantList from './../components/RestaurantlList';
const HomeScreen=()=>{
   const [term,setTerm]=useState('');
   const [searchApi,errorMsg,results]=useResult();
   const filterResultByPrice=(price)=>{
      return results.filter(result=>{
         return result.price===price;
      })
   }
    return(
        <View style={{flex:1}}>
          <SearchBar 
          term={term} 
          onTermchange={newTerm=>setTerm(newTerm)}
          onEndsubmit={()=>searchApi(term)}
          />
          {errorMsg?<Text>{errorMsg}</Text>:null}
          <ScrollView>
            <RestaurantList title="Top Offers" results={filterResultByPrice('$')} horizontal={true}/>
            <RestaurantList title="All Restaurants"  results={filterResultByPrice('$$')}/>
          </ScrollView>
         
      </View>
    )
}
export default HomeScreen;