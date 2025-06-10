import { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/dashboard.styles';

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState('User');
  const [hasDietPlan, setHasDietPlan] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) setEmail(storedEmail);
  }, []);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>OmniQuest</Text>
      <Text style={styles.subtitle}>Welcome, {email}</Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Workout Sessions</Text>
        <Pressable style={styles.button} onPress={() => router.push('/add-workout')}>
          <Text style={styles.buttonText}>+ Add Workout</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Diet Plan</Text>
        <Pressable
          style={styles.button}
          onPress={() => router.push(hasDietPlan ? '/edit-diet' : '/create-diet')}
        >
          <Text style={styles.buttonText}>
            {hasDietPlan ? 'Edit Diet Plan' : '+ Create Diet Plan'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
