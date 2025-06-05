import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from './HomeScreen.styles';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import RentSteps from '../../components/RentSteps/RentSteps';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import HotDeals from '../../components/HotDeals/HotDeals';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getUserData();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const loginStatus = await AsyncStorage.getItem('@is_logged_in');
      setIsLoggedIn(loginStatus === 'true');
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLoggedIn(false);
    }
  };

  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('@user_data');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserName(userData.name);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {return 'Good Morning';}
    if (hour < 18) {return 'Good Afternoon';}
    return 'Good Evening';
  };

  const handleProfilePress = async () => {
    console.log('Profile pressed');
    try {
      const loginStatus = await AsyncStorage.getItem('@is_logged_in');
      if (loginStatus === 'true') {
        navigation.navigate('Profile');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      navigation.navigate('Login');
    }
  };

  const greeting = getGreeting();

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(240, 244, 255, 1)',
          'rgba(230, 238, 255, 0.6)',
        ]}
        useAngle={true}
        angle={180}
        style={styles.headerGradient}>
        <View style={[styles.header, { zIndex: 2 }]}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>{greeting},</Text>
            <Text style={styles.username}>{userName || 'Guest User'}</Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={handleProfilePress}
          >
            <Image

              source={require('../../assets/images/user.png')}
              style={{ height: 24, width: 24 , color: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.blurOverlay, { zIndex: 1 }]}/>
      </LinearGradient>

      <Banner/>
      <Categories/>
      <HotDeals/>
      <RentSteps/>
      <FeaturedProducts/>
    </ScrollView>
  );
}
