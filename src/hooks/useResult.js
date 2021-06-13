import {useState,useEffect} from 'react';
import Restaurant from '../api/Restaurant';

export default ()=>{
   const [results,setResults]=useState([]);
   const [errorMsg,setErrorMsg]=useState('')
   const searchApi=async (searchTerm)=>{
     try {
      const response=await Restaurant.get('/search',{
        params:{
          limit:30,
          term:searchTerm,
          location:'New York'
        }
      })
      setResults(response.data.businesses)
     } catch (error) {
         setErrorMsg('Something went wrong')
     }
     

   } 
   useEffect(()=>{
        searchApi('drink')
   },[])
   return [searchApi,errorMsg,results]
}