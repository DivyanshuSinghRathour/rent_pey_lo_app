import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './HotDeals.styles';

const hotDealsData = [
  {
    id: 1,
    image: { uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    name: 'Modern Sofa Set',
    originalPrice: 2999,
    discountedPrice: 1999,
    rating: 4.5,
  },
  {
    id: 2,
    image: { uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    name: 'Queen Size Bed',
    originalPrice: 1999,
    discountedPrice: 1499,
    rating: 4.2,
  },
  {
    id: 3,
    image: { uri: 'https://images.unsplash.com/photo-1607062088573-f6b259c6ea0b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    name: 'Dining Table Set',
    originalPrice: 2499,
    discountedPrice: 1799,
    rating: 4.8,
  },
];

const HotDeals = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Image
            key={i}
            source={require('../../assets/images/star.png')}
            size={16}
            color="#FFD700"
            style={styles.starIcon}
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Image
            key={i}
            source={require('../../assets/images/rating.png')}
            size={16}
            color="#FFD700"
            style={styles.starIcon}
          />
        );
      } else {
        stars.push(
          <IconButton
            key={i}
            icon="star-outline"
            size={16}
            iconColor="#FFD700"
            style={styles.starIcon}
          />
        );
      }
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hot Deals</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {hotDealsData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.productImage} resizeMode="cover" />
            <View style={styles.cardContent}>
              <Text style={styles.productName} numberOfLines={2}>
                {item.name}
              </Text>
              <View style={styles.priceContainer}>
                <Text style={styles.discountedPrice}>₹{item.discountedPrice}</Text>
                <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
                <Text style={styles.discount}>
                  {Math.round(((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100)}% OFF
                </Text>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.stars}>{renderStars(item.rating)}</View>
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
              <TouchableOpacity style={styles.rentButton}>
                <Text style={styles.rentButtonText}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HotDeals;
