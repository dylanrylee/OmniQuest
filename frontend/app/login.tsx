import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { authStyles } from '../styles/authStyle.styles';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('🟡 Sending login request to backend...');
      const response = await axios.post('http://192.168.1.167:8080/api/auth/login', {
        email,
        password,
      });

      const { token, email: userEmail } = response.data;

      // ✅ Save token & email
      await SecureStore.setItemAsync('authToken', token);
      await SecureStore.setItemAsync('userEmail', userEmail);

      console.log('🟢 Login success:', response.data);
      Alert.alert('Success', 'Logged in successfully');

      setTimeout(() => {
        router.replace('/dashboard');
      }, 100);
    } catch (error: any) {
      console.error('🔴 Login error:', error);
      Alert.alert(
        'Login Failed',
        error.response?.data?.message || 'Invalid email or password.'
      );
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
        <Text style={authStyles.footerText}>Don’t have an account? </Text>
        <Pressable
          onPress={() => router.push('/signup')}
          style={({ pressed }) => [
            authStyles.linkWrapper,
            pressed && authStyles.linkPressed,
          ]}
        >
          <Text style={authStyles.link}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}
