import React from 'react'
import { View,Text,StyleSheet,FlatList} from 'react-native';
import images from '../images';
import MenuDetails from './../components/MenuDetails';

const MenuScreen=({route})=>{
    const {id}=route.params;
    const [orderItems, setOrderItems] = React.useState([]);
    const allOrders=(newOrder)=>{
        setOrderItems(newOrder);
        console.log(111);
        console.log(orderItems)
    }
    const menuList=[
        {
            menuId:"1",
            name: "Crispy Chicken Burger",
            photo: images.crispy_chicken_burger,
            description: "Burger with crispy chicken, cheese and lettuce",
            calories: 200,
            price: 10
        },
        {
            menuId:"2",
            name: "Crispy Chicken Burger with Honey Mustard",
            photo: images.honey_mustard_chicken_burger,
            description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
            calories: 250,
            price: 15
         },
         {
            menuId:"3",
            name: "Crispy Baked French Fries",
            photo: images.baked_fries,
            description: "Crispy Baked French Fries",
            calories: 194,
            price: 8
         },
         {
            menuId:"4",
            name: "Hawaiian Pizza",
            photo: images.hawaiian_pizza,
            description: "Canadian bacon, homemade pizza crust, pizza sauce",
            calories: 250,
            price: 15
        },
        {
            menuId:"5",
            name: "Tomato & Basil Pizza",
            photo: images.pizza,
            description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
            calories: 250,
            price: 20
        },
        {
            menuId:"6",
            name: "Tomato Pasta",
            photo: images.tomato_pasta,
            description: "Pasta with fresh tomatoes",
            calories: 100,
            price: 10
        },
        {
            menuId:"7",
            name: "Mediterranean Chopped Salad ",
            photo: images.salad,
            description: "Finely chopped lettuce, tomatoes, cucumbers",
            calories: 100,
            price: 10
        },
        {
            menuId:"8",
            name: "Chicago Style Hot Dog",
            photo: images.chicago_hot_dog,
            description: "Fresh tomatoes, all beef hot dogs",
            calories: 100,
            price: 20
        },
        {
            menuId:"9",
            name: "Sushi sets",
            photo: images.sushi,
            description: "Fresh salmon, sushi rice, fresh juicy avocado",
            calories: 100,
            price: 50
        },
        {
            menuId:"10",
            name: "Kolo Mee",
            photo: images.kolo_mee,
            description: "Noodles with char siu",
            calories: 200,
            price: 5
        },
        {
            menuId:"11",
            name: "Sarawak Laksa",
            photo: images.sarawak_laksa,
            description: "Vermicelli noodles, cooked prawns",
            calories: 300,
            price: 8
        },
        {
            menuId:"12",
            name: "Nasi Lemak",
            photo: images.nasi_lemak,
            description: "A traditional Malay rice dish",
            calories: 300,
            price: 8
        }
    ]
    return(
        <View style={styles.container}>
            <FlatList
             showsVerticalScrollIndicator={false}
             data={menuList}
             keyExtractor={result=>result.menuId}
             renderItem={({item})=>{
                 return <MenuDetails result={item} orders={(val)=>allOrders(val)} orderItems={orderItems}/>
             }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginVertical:'2%',
        marginHorizontal:'2%'
    }

})

export default MenuScreen;