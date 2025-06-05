import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Alert, Image } from 'react-native';
import { Avatar, Card, Divider, TouchableRipple, Text, Portal, Dialog, Button } from 'react-native-paper';
import { styles } from './ProfileScreen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [logoutVisible, setLogoutVisible] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const userInfo = {
    name: userName,
    email: userEmail,
    phone: '+91-' + userPhone,
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      setLoading(true);
      const userDataString = await AsyncStorage.getItem('@user_data');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserName(userData.name);
        setUserEmail(userData.email);
        setUserPhone(userData.phone);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderUserInfo = () => (
    <View style={styles.userInfo}>
      {loading ? (
        <>
          <View style={[styles.skeletonLine, styles.skeletonName]} />
          <View style={[styles.skeletonLine, styles.skeletonContact]} />
          <View style={[styles.skeletonLine, styles.skeletonContact]} />
        </>
      ) : (
        <>
          <Text variant="headlineMedium" style={styles.name}>{userInfo.name}</Text>
          <Text variant="bodyMedium" style={styles.contact}>{userInfo.email}</Text>
          <Text variant="bodyMedium" style={styles.contact}>{userInfo.phone}</Text>
        </>
      )}
    </View>
  );

  const showLogoutDialog = () => setLogoutVisible(true);
  const hideLogoutDialog = () => setLogoutVisible(false);

  const handleLogout = async () => {
    hideLogoutDialog();
    try {
      // Clear all stored data
      await AsyncStorage.multiRemove(['@auth_token', '@user_data', '@is_logged_in']);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Error', 'Failed to logout. Please try again.');
    }
  };

  const menuItems = [
    { title: 'Edit Profile', icon: require('../../assets/images/edit.png'), onPress: () => {} },
    { title: 'Previous Orders', icon: require('../../assets/images/reorder.png'), onPress: () => {} },
    { title: 'Cart', icon: require('../../assets/images/tabs/cart.png'), onPress: () => {} },
    { title: 'Privacy Policy', icon: require('../../assets/images/privacy.png'), onPress: () => {} },
    { title: 'Terms & Conditions', icon: require('../../assets/images/terms.png'), onPress: () => {} },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
        <View style={styles.profileButton}>
          <Image
            source={require('../../assets/images/user.png')}
            style={{ height: 24, width: 24 , resizeMode: 'center'}}
          />
        </View>
          {renderUserInfo()}
        </View>

        <Card style={styles.card}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableRipple onPress={item.onPress}>
                <View style={styles.menuItem}>
                  <Image
                    source={item.icon}
                    style={{ height: 22, width: 22 , color: 'white', padding: 10,  marginRight: 10}}
                  />
                  <Text variant="bodyLarge" style={styles.menuText}>{item.title}</Text>
                </View>
              </TouchableRipple>
              {index < menuItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Card>

        <TouchableRipple onPress={showLogoutDialog} style={styles.logoutContainer}>
          <View style={styles.logoutButtonContainer}>
            <Text variant="bodyLarge" style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableRipple>

        <View style={styles.versionContainer}>
          <Text variant="bodySmall" style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>

      <Portal>
        <Dialog visible={logoutVisible} onDismiss={hideLogoutDialog}>
          <Dialog.Title>Logout</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Are you sure you want to logout?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideLogoutDialog}>Cancel</Button>
            <Button onPress={handleLogout} textColor="#ff5555">Logout</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

export default ProfileScreen; 