// app/index.tsx
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to OmniQuest</Text>
      <Link href="/login">
        <Text style={{ color: 'blue', marginTop: 10 }}>Go to Login</Text>
      </Link>
    </View>
  );
}
