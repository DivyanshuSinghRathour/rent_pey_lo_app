import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const HORIZONTAL_MARGIN = 16;
const BORDER_RADIUS = 12;
const BANNER_WIDTH = width - (HORIZONTAL_MARGIN * 2);

export const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 16,
    marginBottom: 16,
    height: 130,
    marginHorizontal: HORIZONTAL_MARGIN,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  imageContainer: {
    width: BANNER_WIDTH,
    height: 200,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    marginHorizontal: 0,
  },
  bannerImage: {
    width: BANNER_WIDTH,
    height: '100%',
    borderRadius: BORDER_RADIUS,
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
