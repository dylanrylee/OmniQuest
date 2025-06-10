import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/index.styles';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to OmniQuest</Text>
      <Text style={styles.quote}>
        “You don’t get stronger by taking it easy. You get stronger by pushing through.”
      </Text>

      <Pressable
        onPress={() => router.push('/login')}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Start Training</Text>
      </Pressable>
    </View>
  );
}
