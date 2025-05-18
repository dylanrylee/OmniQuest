import { View, Text, ImageBackground, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/index.styles';

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to OmniQuest</Text>
        <Text style={styles.quote}>
          “You don’t get stronger by taking it easy. You get stronger by pushing through.” — OmniMind
        </Text>

        <Pressable
          onPress={() => router.push('/login')}
          style={({ pressed }) => [
            styles.linkWrapper,
            pressed && styles.linkPressed,
          ]}
        >
          <Text style={styles.link}>Start Training →</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
