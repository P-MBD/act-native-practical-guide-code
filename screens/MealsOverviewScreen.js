import { useLayoutEffect } from 'react';
import{View, Text,StyleSheet,FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS,CATEGORIES} from '../data/dummy-data';
function MealsOverviewScreen({ route,navigation }){

    const {categoryId}= route?.params||{};
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
    // const categoryTitle = CATEGORIES.find((category)=>category.id===categoryId).title;
    // navigation.setOptions({
    //     title:categoryTitle
    // })
    useLayoutEffect(()=>{
         const categoryTitle = CATEGORIES.find((category)=>category.id===categoryId).title;
         navigation.setOptions({
         title:categoryTitle
        });
    },[categoryId,navigation]);
    function renderMealItem(itemData){
        const item=itemData.item;
        const mealItemProps={
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            comlexity:item.comlexity,
            duration:item.duration,
        };
        return (<MealItem  {...mealItemProps} />);
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item)=>item.id}
                renderItem={renderMealItem}            
            />
        </View>
    )
    
};


const styles= StyleSheet.create({
        container:{
            flex:1,
            padding:16,
        }

});

export default MealsOverviewScreen;