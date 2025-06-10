import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const verifyAuth = async () => {
      const token = await SecureStore.getItemAsync('authToken');
      const storedEmail = await SecureStore.getItemAsync('userEmail');

      if (!token) {
        router.replace('/login'); // kick back to login
        return;
      }

      setEmail(storedEmail || '');
      setLoading(false);
    };

    verifyAuth();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bfff" />
      </View>
    );
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to OmniQuest</Text>
      <Text style={{ marginTop: 8 }}>Logged in as: {email}</Text>

      <Pressable
        onPress={async () => {
          await SecureStore.deleteItemAsync('authToken');
          await SecureStore.deleteItemAsync('userEmail');
          router.replace('/login');
        }}
        style={{
          marginTop: 20,
          padding: 12,
          backgroundColor: '#222',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Logout</Text>
      </Pressable>
    </View>
  );
}
