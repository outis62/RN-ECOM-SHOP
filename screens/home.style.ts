import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../constants/index"

const styles = StyleSheet.create({
    textStyle:{
        fontFamily:"bold",
        fontSize:10
    },
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small
    },
    appBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    location:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.gray,
    },
    cartCount:{
        position:"absolute",
        bottom:16,
        width:17,
        height:17,
        borderRadius:30,
        alignItems:"center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex:999,
    },
    cartNumber:{
        fontFamily:"regular",
        fontWeight:"600",
        fontSize:10,
        color:COLORS.lightWhite,
    }
})

export default styles