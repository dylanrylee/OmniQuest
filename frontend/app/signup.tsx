import { View, Text, TextInput, Pressable } from 'react-native';
import { authStyles } from '../styles/authStyle.styles';
import { useRouter } from 'expo-router';

export default function Signup() {
  const router = useRouter();

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
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={authStyles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={authStyles.input}
      />

      <Pressable style={authStyles.button}>
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
