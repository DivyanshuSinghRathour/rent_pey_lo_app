import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Image, Dimensions } from 'react-native';
import { styles } from './Banner.styles';

const { width } = Dimensions.get('window');
const HORIZONTAL_MARGIN = 16;
const BANNER_WIDTH = width - (HORIZONTAL_MARGIN * 2);

const bannerImages = [
  require('../../assets/images/image1.png'),
  require('../../assets/images/image2.png'),
  require('../../assets/images/image3.png'),
];

const Banner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(contentOffset.x / BANNER_WIDTH);
    setCurrentBannerIndex(currentIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentBannerIndex + 1) % bannerImages.length;
      scrollViewRef.current?.scrollTo({
        x: nextIndex * BANNER_WIDTH,
        animated: true,
      });
      setCurrentBannerIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentBannerIndex]);

  return (
    <View style={styles.bannerContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={BANNER_WIDTH}
        snapToAlignment="center"
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
      >
        {bannerImages.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={image}
              style={styles.bannerImage}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {bannerImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentBannerIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;
