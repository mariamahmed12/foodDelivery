import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PreviousOrder=()=>{
    return(
        <View style={styles.container}>
        <Text>Previous Order</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default PreviousOrder;