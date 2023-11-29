import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Logout</Text>
    </View>
  )
}

export default Logout

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