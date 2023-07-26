import {View,Text, Pressable, Image, StyleSheet,ScrollView, Platform} from 'react-native'
function MealItem({title,imageUrl,duration,complexity,affordability}){
    return(
        <ScrollView style={styles.mealItem}>
             <Pressable
                android_ripple={{color:'#ccc'}}
                style={({pressed})=> (pressed ? styles.buttonPressed : null)}
             >
                <View style={styles.innerContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <Text>{duration}m</Text>
                    <Text>{complexity}</Text>
                    <Text>{affordability}</Text>
                </View>
             </Pressable>
        </ScrollView>
    );
}
const styles =StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:Platform.OS==='android'?'hidden':'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden',
    },
    image:{
            width:'100%',
            height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,

    },
    buttonPressed:{
        opacity:0.5,
    },
})
export default MealItem;