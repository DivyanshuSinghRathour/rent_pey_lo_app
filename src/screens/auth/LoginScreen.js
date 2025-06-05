import React, { useState } from 'react';
import { View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { TextInput, Text, Button, Avatar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { styles } from './LoginScreen.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { login } from '../../services/api';
import Toast from '../../components/Toast/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'error',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      password: '',
    };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const showToast = (message, type = 'error') => {
    setToast({
      visible: true,
      message,
      type,
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  const storeUserData = async (token, userData) => {
    try {
      await AsyncStorage.setItem('@auth_token', token);
      await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
      await AsyncStorage.setItem('@is_logged_in', 'true');
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  };

  const handleLogin = async () => {
    if (!validateForm()) {return;}
    setLoading(true);
    try {
      const response = await login({ email, password });
      if (response?.access_token) {
        const userData = {
          name: response?.first_name + ' ' + response?.last_name || 'Unknown',
          email: response?.email || email,
          access_token: response?.access_token,
          phone: response?.phone,
        };
        await storeUserData(response.access_token, userData);
        showToast('Login successful!', 'success');
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      } else {
        showToast('Invalid email or password.');
      }
    } catch (error) {
      showToast(error?.toString() || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  return (
    <KeyboardAwareScrollView
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#ff5555', '#ff8080']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >

          <View style={styles.header}>
            <Animatable.View animation="bounceIn" duration={1500}>
            <Text style={styles.logotext}>RentPeyLo</Text>
            </Animatable.View>
            <Animatable.Text
          animation="fadeIn"
          delay={500}
          style={styles.subtitletext}
        >
          Rent Anything, Anytime
        </Animatable.Text>
          </View>

          <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.footer}
          >
            <View style={styles.formContainer}>
              <Text variant="headlineMedium" style={styles.welcomeText}>
                Welcome Back
              </Text>
              <Text variant="bodyMedium" style={styles.subtitle}>
                Sign in to continue
              </Text>

              <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (errors.email) {
                    setErrors(prev => ({ ...prev, email: '' }));
                  }
                }}
                mode="outlined"
                style={styles.input}
                activeOutlineColor="#ff5555"
                error={!!errors.email}
                left={<TextInput.Icon icon={require('../../assets/images/mail.png')} color="#666" />}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

              <TextInput
                label="Password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (errors.password) {
                    setErrors(prev => ({ ...prev, password: '' }));
                  }
                }}
                mode="outlined"
                style={styles.input}
                secureTextEntry={secureTextEntry}
                activeOutlineColor="#ff5555"
                error={!!errors.password}
                left={<TextInput.Icon icon={require('../../assets/images/padlock.png')} color="#666" />}
                right={
                  <TextInput.Icon
                    icon={secureTextEntry ? require('../../assets/images/show.png') : require('../../assets/images/hide.png')}
                    color="#666"
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                }
              />
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.forgotPassword}
              >
                <Text variant="bodyMedium" style={styles.forgotPasswordText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.loginButton}
                loading={loading}
                disabled={loading}
              >
                Sign In
              </Button>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>OR</Text>
                <View style={styles.divider} />
              </View>

              <TouchableOpacity
                style={styles.googleButton}
                onPress={handleGoogleLogin}
                disabled={loading}
              >
                <View style={styles.googleButtonContent}>
                  <Text style={styles.googleButtonText}>Continue with Google</Text>
                  <Image
                    source={require('../../assets/images/devicon_google.png')}
                    style={styles.googleIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Toast
            visible={toast.visible}
            message={toast.message}
            type={toast.type}
            onHide={hideToast}
          />
            <View style={styles.loginContainer}>
              <Text variant="bodyMedium" style={styles.loginText}>
              Don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text variant="bodyMedium" style={styles.loginLink}>
                Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
