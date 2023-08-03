import {Pressable, StyleSheet, Platform} from 'react-native'
//import { Ionicons } from '@expo/vector-icons
import  Ionicons  from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from "react-native-vector-icons/Ionicons";
//import { Ionicons } from 'native-base'
function IconButton({icon, color, onPress}){
return(
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed }>
          <Ionicons name={icon} size={24} color={color} />
    </Pressable>
);
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7
    },
    icon:{
        fontSize:23,
        color:'#fff'
    },
});
export default IconButton;