import React, { useState } from 'react';
import { View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { TextInput, Text, Button, Avatar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { styles } from './SignupScreen.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    }, 1500);
  };

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#ff5555', '#ff8080']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.header}>
            <Animatable.View animation="bounceIn" duration={1500}>
              <Image
                source={require('../../assets/images/add.png')}
                style={{ height: 120, width: 120 , color: 'white'}}
              />
            </Animatable.View>
          </View>

          <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.footer}
          >
            <View style={styles.formContainer}>
              <Text variant="headlineMedium" style={styles.welcomeText}>
                Create Account
              </Text>
              <Text variant="bodyMedium" style={styles.subtitle}>
                Sign up to get started
              </Text>

              <View style={styles.row}>
                <TextInput
                  label="First Name"
                  value={formData.firstName}
                  onChangeText={(text) => handleChange('firstName', text)}
                  mode="outlined"
                  style={[styles.input, styles.halfInput]}
                  activeOutlineColor="#ff5555"
                  error={!!errors.firstName}
                  left={<TextInput.Icon icon={require('../../assets/images/first.png')} color="#666" />}
                />
                <TextInput
                  label="Last Name"
                  value={formData.lastName}
                  onChangeText={(text) => handleChange('lastName', text)}
                  mode="outlined"
                  style={[styles.input, styles.halfInput]}
                  activeOutlineColor="#ff5555"
                  error={!!errors.lastName}
                  left={<TextInput.Icon icon={require('../../assets/images/first.png')} color="#666" />}

                />
              </View>
              <View style={styles.errorRow}>
                {errors.firstName ? <Text style={[styles.errorText, styles.halfError]}>{errors.firstName}</Text> : <View style={styles.halfError} />}
                {errors.lastName ? <Text style={[styles.errorText, styles.halfError]}>{errors.lastName}</Text> : <View style={styles.halfError} />}
              </View>

              <TextInput
                label="Phone Number"
                value={formData.phone}
                onChangeText={(text) => handleChange('phone', text)}
                mode="outlined"
                style={styles.input}
                activeOutlineColor="#ff5555"
                error={!!errors.phone}
                left={<TextInput.Icon icon={require('../../assets/images/telephone.png')} color="#666" />}
                keyboardType="phone-pad"
              />
              {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}

              <TextInput
                label="Email"
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
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
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
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

              <Button
                mode="contained"
                onPress={handleSignup}
                style={styles.signupButton}
                loading={loading}
                disabled={loading}
              >
                Sign Up
              </Button>
            </View>

            <View style={styles.loginContainer}>
              <Text variant="bodyMedium" style={styles.loginText}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text variant="bodyMedium" style={styles.loginLink}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
