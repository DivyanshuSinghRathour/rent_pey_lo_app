import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 40,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'FreckleFace',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: 'hidden',
    padding: 16,
  },
  lastCard: {
    width: '100%',
    height: 150,
  },
  stepOneCard: {
    backgroundColor: '#F8F0FF', // Light purple
  },
  stepTwoCard: {
    backgroundColor: '#FFF4F6', // Light pink
  },
  stepThreeCard: {
    backgroundColor: '#F0F9FF', // Light blue
  },
  numberContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#ffffff80',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  number: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'FreckleFace',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    fontFamily: 'FreckleFace',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    fontFamily: 'FreckleFace',
  },
}); 
 