import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home_screen/HomeScreen';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';

const Tab = createBottomTabNavigator();

// Tab bar images
const tabImages = {
  home: {
    active: require('../assets/images/tabs/home.png'),
    inactive: require('../assets/images/tabs/home.png'),
  },
  search: {
    active: require('../assets/images/tabs/search.png'),
    inactive: require('../assets/images/tabs/search.png'),
  },
  cart: {
    active: require('../assets/images/tabs/cart.png'),
    inactive: require('../assets/images/tabs/cart.png'),
  },
  notifications: {
    active: require('../assets/images/tabs/noti.png'),
    inactive: require('../assets/images/tabs/noti.png'),
  },
};

const SearchScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Search Screen</Text>
  </View>
);

const CartScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Cart Screen</Text>
  </View>
);

const NotificationsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Notifications Screen</Text>
  </View>
);

const BottomTabs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let imageSource;
            switch (route.name) {
              case 'Home':
                imageSource = focused ? tabImages.home.active : tabImages.home.inactive;
                break;
              case 'Search':
                imageSource = focused ? tabImages.search.active : tabImages.search.inactive;
                break;
              case 'Cart':
                imageSource = focused ? tabImages.cart.active : tabImages.cart.inactive;
                break;
              case 'Notifications':
                imageSource = focused ? tabImages.notifications.active : tabImages.notifications.inactive;
                break;
              default:
                imageSource = tabImages.home.inactive;
            }

            return (
              <Image
                source={imageSource}
                style={[
                  styles.tabIcon,
                  { tintColor: color }
                ]}
              />
            );
          },
          tabBarActiveTintColor: '#ff5555',
          tabBarInactiveTintColor: '#666666',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
            height: 60,
            paddingBottom: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: '600',
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default BottomTabs;
