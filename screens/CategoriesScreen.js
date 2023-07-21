import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';


function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  return (
      <CategoryGridTile />
  );
}

export default CategoriesScreen;
