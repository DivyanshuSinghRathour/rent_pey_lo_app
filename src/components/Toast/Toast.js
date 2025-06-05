import React, { useEffect, useMemo } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

const Toast = ({ visible, message, type = 'error', onHide }) => {
  const translateY = useMemo(() => new Animated.Value(100), []);

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          bounciness: 5,
          speed: 14,
        }),
        Animated.delay(2000),
        Animated.timing(translateY, {
          toValue: 100,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (onHide) {
          onHide();
        }
      });
    }
  }, [visible, translateY, onHide]);

  if (!visible) return null;

  const getToastStyle = () => {
    switch (type) {
      case 'success':
        return styles.successContainer;
      case 'error':
        return styles.errorContainer;
      default:
        return styles.defaultContainer;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'check-circle';
      case 'error':
        return 'alert-circle';
      default:
        return 'information';
    }
  };

  return (
    <View style={styles.absoluteWrapper}>
      <Animated.View
        style={[
          styles.container,
          getToastStyle(),
          { transform: [{ translateY }] }
        ]}
      >
        <IconButton
          icon={getIcon()}
          size={24}
          iconColor="#fff"
          style={styles.icon}
        />
        <Text style={styles.message}>{message}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
  },
  container: {
    minWidth: '90%',
    padding: 5,
    borderRadius: 12,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  errorContainer: {
    backgroundColor: '#ff5555',
  },
  successContainer: {
    backgroundColor: '#4CAF50',
  },
  defaultContainer: {
    backgroundColor: '#333',
  },
  icon: {
    margin: 0,
    marginRight: 8,
  },
  message: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
});

export default Toast;
