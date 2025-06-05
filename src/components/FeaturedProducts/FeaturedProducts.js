import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './FeaturedProducts.styles';

const featuredData = [
  {
    id: 1,
    image: { uri: 'https://plus.unsplash.com/premium_photo-1664302149029-50514758ed8b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    name: 'Smart TV 55"',
    originalPrice: 3999,
    discountedPrice: 2499,
    rating: 4.7,
  },
  {
    id: 2,
    image: { uri: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    name: 'Gaming Console',
    originalPrice: 2499,
    discountedPrice: 1999,
    rating: 4.9,
  },
  {
    id: 3,
    image: { uri: 'https://images.unsplash.com/photo-1638129284529-bed6d6f588e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    name: 'Coffee Maker',
    originalPrice: 1499,
    discountedPrice: 999,
    rating: 4.6,
  },
];

const FeaturedProducts = () => {
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
            iconColor="#FFD700"
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
        <Text style={styles.title}>Featured Products</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {featuredData.map((item) => (
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

export default FeaturedProducts;
