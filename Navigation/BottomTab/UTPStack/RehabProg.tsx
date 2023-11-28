import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RehabProg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>RehabProg</Text>
    </View>
  )
}

export default RehabProg

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