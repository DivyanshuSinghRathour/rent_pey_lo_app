import React, { useEffect, useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './SplashScreen.styles';
import { Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const checkLoginStatus = useCallback(async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } catch (error) {
      console.error('Error checking login status:', error);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  }, [navigation]);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  return (
    <LinearGradient
      colors={['#ff5555', '#ff8080']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animatable.View
        animation="bounceIn"
        duration={1500}
        style={styles.logoContainer}
      >
        <Text style={styles.logo}>RentPeyLo</Text>
        <Animatable.Text
          animation="fadeIn"
          delay={500}
          style={styles.subtitle}
        >
          Rent Anything, Anytime
        </Animatable.Text>
      </Animatable.View>
    </LinearGradient>
  );
};

export default SplashScreen;
