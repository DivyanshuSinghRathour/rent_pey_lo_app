import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Categories.styles';

const categories = [
  {
    id: 1,
    name: 'Rent Furniture',
    icon: require('../../assets/images/furniture.png'),
  },
  {
    id: 2,
    name: 'Rent Home Appliance',
    icon: require('../../assets/images/fridge.png'),
  },

  {
    id: 3,
    name: 'Rent Package',
    icon: require('../../assets/images/combo.png'),
  },
];

const Categories = () => {
  return (
    <View>
      <View style={styles.categoriesHeader}>
        <Text style={styles.sectionTitle}>Explore our category</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
          >
            <Image source={category.icon} style={styles.categoryIcon} resizeMode='contain' />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;
