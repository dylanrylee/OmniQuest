import { View, Text, TextInput, Pressable } from 'react-native';
import { authStyles } from '../styles/authStyle.styles';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

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
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={authStyles.input}
      />

      <Pressable style={authStyles.button}>
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
