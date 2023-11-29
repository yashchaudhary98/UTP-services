import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NgoConn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>NgoConn</Text>
    </View>
  )
}

export default NgoConn

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