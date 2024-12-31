import { View, Text, Button } from "react-native";
import { useRef } from "react";
import LottieView from "lottie-react-native";
import Netflix from "@assets/lottie/Netflix.json";
import { Stack } from "expo-router";

export default function animation() {
  const animation = useRef<LottieView>(null);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        autoPlay
        style={{
          width: "80%",
          maxWidth: 400,
          height: 200,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={Netflix}
      />
    </View>
  );
}
