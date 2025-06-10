import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { authStyles } from '../styles/authStyle.styles';
import * as SecureStore from 'expo-secure-store';
import { api } from '../utils/api';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      });

      // 👇 Save email for dashboard
      localStorage.setItem('email', response.data.email);

      // 👇 Save token if needed
      localStorage.setItem('token', response.data.token);

      router.replace('/dashboard');
    } catch (error) {
      console.error(error);
      Alert.alert('Login failed', 'Please check your credentials.');
    }
  };

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.header}>OmniQuest</Text>
      <Text style={authStyles.pageLabel}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={authStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={authStyles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={authStyles.button} onPress={handleLogin}>
        <Text style={authStyles.buttonText}>Login</Text>
      </Pressable>

      <View style={authStyles.footerTextContainer}>
        <Text style={authStyles.footerText}>Don't have an account? </Text>
        <Pressable
          onPress={() => router.push('/signup')}
          style={({ pressed }) => [
            authStyles.linkWrapper,
            pressed && authStyles.linkPressed,
          ]}
        >
          <Text style={authStyles.link}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
