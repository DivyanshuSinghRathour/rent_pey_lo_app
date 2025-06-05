import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  profileButton: {
    backgroundColor: '#ff5555',
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    elevation: 4,
  },
  userInfo: {
    marginLeft: 20,
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contact: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  card: {
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 2,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  logoutContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  logoutButtonContainer: {
    padding: 16,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#ff5555',
    fontWeight: '600',
  },
  versionContainer: {
    marginTop: 20,
    width: '100%',
    paddingBottom: 20,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  loader: {
    marginBottom: 10,
  },
  placeholder: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
    opacity: 0.6,
  },
  skeletonLine: {
    backgroundColor: '#e1e9ee',
    borderRadius: 4,
    marginVertical: 3,
  },
  skeletonName: {
    width: '70%',
    height: 28,
  },
  skeletonContact: {
    width: '50%',
    height: 16,
    marginTop: 8,
  },
});
 