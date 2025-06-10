import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { authStyles } from '../styles/authStyle.styles';
import { api } from '../utils/api';


export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      console.log('🟡 Sending signup request to backend...');
      const response = await api.post('/auth/signup', {
        email,
        password,
      });

      console.log('🟢 Signup success:', response.data);
      Alert.alert('Success', response.data.message);
      router.push('/login');
    } catch (error: any) {
      console.error('🔴 Signup error:', error);
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Signup failed. Please try again.'
      );
    }
  };

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.header}>OmniQuest</Text>
      <Text style={authStyles.pageLabel}>Sign Up</Text>

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
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={authStyles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Pressable style={authStyles.button} onPress={handleSignup}>
        <Text style={authStyles.buttonText}>Sign Up</Text>
      </Pressable>

      <View style={authStyles.footerTextContainer}>
        <Text style={authStyles.footerText}>Already have an account? </Text>
        <Pressable
          onPress={() => router.push('/login')}
          style={({ pressed }) => [
            authStyles.linkWrapper,
            pressed && authStyles.linkPressed,
          ]}
        >
          <Text style={authStyles.link}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
