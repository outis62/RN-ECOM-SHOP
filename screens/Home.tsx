import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Fontisto, Ionicons} from '@expo/vector-icons'
import styles from './home.style'
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Welcome } from '@/components'

const Home = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24}/>

          <Text style={styles.location}>Burkina Faso</Text>

          <View style={{alignItems:"flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
            <Fontisto name='shopping-bag' size={24}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home 