import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Home</Text>
    </SafeAreaView>
  )
}

export default Home 