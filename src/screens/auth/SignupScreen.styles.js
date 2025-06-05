import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    height: height * 0.75,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  formContainer: {
    flex: 1,
  },
  logo: {
    height: height * 0.15,
    width: height * 0.15,
  },
  welcomeText: {
    color: '#333',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  halfInput: {
    width: '48%',
  },
  errorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginBottom: 16,
    marginLeft: 8,
  },
  halfError: {
    width: '48%',
  },
  signupButton: {
    padding: 4,
    borderRadius: 12,
    backgroundColor: '#ff5555',
    marginTop: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  loginText: {
    color: '#666',
  },
  loginLink: {
    color: '#ff5555',
    fontWeight: 'bold',
  },
});
