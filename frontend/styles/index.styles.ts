import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    backgroundColor: '#ffffff',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: 'rgba(139, 0, 0, 0.85)', // Rich dark red with transparency
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  quote: {
    fontSize: 16,
    color: '#ffffff',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 16,
  },
  linkWrapper: {
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  linkPressed: {
    backgroundColor: '#333333',
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
