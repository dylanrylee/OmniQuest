import { useEffect, useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { authStyles } from '../styles/authStyle.styles';

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('userEmail');

    if (!token || !email) {
      Alert.alert('Session Expired', 'Please log in again.');
      router.replace('/login');
    } else {
      setUserEmail(email);
    }

    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    router.replace('/login');
  };

  if (loading) {
    return (
      <View style={authStyles.container}>
        <ActivityIndicator size="large" color="#00bfff" />
      </View>
    );
  }

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.header}>Dashboard</Text>
      <Text style={authStyles.pageLabel}>Welcome, {userEmail}!</Text>

      <Pressable style={authStyles.button} onPress={handleLogout}>
        <Text style={authStyles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}
