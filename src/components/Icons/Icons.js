import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableOpacity } from 'react-native';

export const IconSize = {
  SMALL: 20,
  MEDIUM: 24,
  LARGE: 32,
};

export const IconColors = {
  PRIMARY: '#ff5555',
  SECONDARY: '#666666',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: '#8E8E93',
  SUCCESS: '#4CAF50',
  ERROR: '#FF3B30',
  WARNING: '#FF9500',
};

const Icon = ({
  name,
  size = IconSize.MEDIUM,
  color = IconColors.PRIMARY,
  onPress,
  style,
  disabled = false,
}) => {
  const iconElement = (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );

  if (onPress) {
    return (
      <TouchableOpacity 
        onPress={onPress}
        disabled={disabled}
        style={{ padding: 8 }}
      >
        {iconElement}
      </TouchableOpacity>
    );
  }

  return iconElement;
};

export const Icons = {
  BACK: 'arrow-left',
  MENU: 'menu',
  MORE: 'dots-vertical',
  CLOSE: 'close',
  ADD: 'plus',
  EDIT: 'pencil',
  DELETE: 'delete',
  SAVE: 'content-save',
  SHARE: 'share-variant',
  SUCCESS: 'check-circle',
  ERROR: 'alert-circle',
  WARNING: 'alert',
  INFO: 'information',
  SEARCH: 'magnify',
  FILTER: 'filter-variant',
  SORT: 'sort',
  REFRESH: 'refresh',
  USER: 'account',
  USERS: 'account-group',
  SETTINGS: 'cog',
  LOGOUT: 'logout',
  MAIL: 'email',
  PHONE: 'phone',
  MESSAGE: 'message',
  NOTIFICATION: 'bell',
  CART: 'cart',
  HEART: 'heart',
  HEART_OUTLINE: 'heart-outline',
  STAR: 'star',
  STAR_OUTLINE: 'star-outline',
  DIRECTIONS: 'directions',
  HOME: 'home',
  CALENDAR: 'calendar',
  CLOCK: 'clock-outline',
};

export default Icon;
