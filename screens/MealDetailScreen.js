import {Text,View,Image} from 'react-native'
import {MEALS} from '../data/dummy-data';



function MealDetailScreen({route}) {
    const {mealId} = route?.params||{};
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId);


return (
    <View>
        <Image source={{uri:selectedMeal.imageUrl}} />
        <Text >{selectedMeal.title}</Text>
    
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredients)=>(
            <Text key={ingredients}>{ingredients}</Text>
        ))}
         <Text>Steps</Text>
        {selectedMeal.steps.map((step)=>(
            <Text key={step}>{step}</Text>
        ))}
    </View>
);
}

export default MealDetailScreen;