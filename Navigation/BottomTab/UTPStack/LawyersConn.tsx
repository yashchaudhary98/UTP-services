import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LawyersConn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>LawyersConn</Text>
    </View>
  )
}

export default LawyersConn

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headingText: {
        fontSize: 12,
        fontWeight: 'bold',

    },
})