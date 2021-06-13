import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
const MenuDetails=({result,orders,orderItems})=>{
    const [count,setCount]=useState(0);
   
    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)
        
        if (action == "+") {
            setCount(count+1)
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
                
            }

            orders(orderList)
        } else {
            setCount(count-1)
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            orders(orderList)
            
            
        }
    }
    
    return(
        <View style={styles.container}>
            <Image style={styles.imagestyle} source={result.photo}/>
            <Text style={styles.textstyle}>{result.name}</Text>
            <Text style={{color:'gray'}}>{result.description}</Text>
            <View style={styles.viewStyle}>
              <Text style={styles.pricestyle}>{result.price} EGP</Text>
              <TouchableOpacity style={styles.opacitydecrement}  onPress={()=>editOrder("-", result.menuId, result.price)}>
                    <Text style={styles.textOpacity}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize:18}}>{count}</Text>
                <TouchableOpacity style={styles.opacityincrement} onPress={()=>editOrder("+", result.menuId, result.price)}>
                    <Text style={styles.textOpacity}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:'2%',
        marginHorizontal:'4%'
    },
    imagestyle:{
        width:'100%',
        height:150,
        borderRadius:2
    },
    textstyle:{
        fontWeight:'bold',
        fontSize:15
    },
    pricestyle:{
        color:'#e68a00',
        fontWeight:'bold',
        fontSize:20,
        width:'25%'
    },
    viewStyle:{
        flexDirection:'row',
        marginTop:'2%',
        alignItems:'center'
    },
    opacitydecrement:{
        marginHorizontal:'4%', 
        width: 50,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
     },
     opacityincrement:{
        marginHorizontal:'4%', 
        width: 50,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
     },
     textOpacity:{
        fontSize:26,
        lineHeight: 36,
        fontWeight:'bold'
     }

})

export default MenuDetails;