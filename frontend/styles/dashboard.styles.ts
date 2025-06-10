import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#ffffff', // White background
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B0000', // Deep red title color
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
