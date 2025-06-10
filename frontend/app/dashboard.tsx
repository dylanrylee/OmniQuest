import { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, Modal } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/dashboard.styles";

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("User");
  const [hasDietPlan, setHasDietPlan] = useState(false);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Text style={styles.title}>OmniQuest</Text>
        <Text style={styles.subtitle}>Welcome, {email}</Text>

        <View style={styles.section}>
          <Text style={styles.heading}>Workout Sessions</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => setShowWorkoutModal(true)}
          >
            <Text style={styles.buttonText}>+ Add Workout</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Diet Plan</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() =>
              router.push(hasDietPlan ? "/edit-diet" : "/create-diet")
            }
          >
            <Text style={styles.buttonText}>
              {hasDietPlan ? "Edit Diet Plan" : "+ Create Diet Plan"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Workout Modal */}
      <Modal visible={showWorkoutModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Choose Workout Type</Text>

            <Pressable
              style={({ pressed }) => [
                styles.modalButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => {
                setShowWorkoutModal(false);
                router.push("/custom-workout");
              }}
            >
              <Text style={styles.modalButtonText}>Custom Workout</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.modalButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => {
                setShowWorkoutModal(false);
                router.push("/generate-workout");
              }}
            >
              <Text style={styles.modalButtonText}>Generate Workout</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && { opacity: 0.6 },
              ]}
              onPress={() => setShowWorkoutModal(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
