import React from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles, getWelcomeTextStyle } from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';



const Welcome = () => {
    const router = useRouter();
  return (
    <View>
        <View style={styles.container}>
            <Text style={getWelcomeTextStyle(COLORS.black, SIZES.xSmall)}>Find the Most</Text>
            <Text style={getWelcomeTextStyle(COLORS.primary, 0)}>
                {""}
                Luxurious Furniture
            </Text>
        </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name='search' size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={(()=>router.navigate("../Search"))}
                        placeholder="Trouvez ici"
                    />
                </View>
                <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite}/>
                </TouchableOpacity>
            </View>
            </View>
            
    </View>
  );
};

export default Welcome;
