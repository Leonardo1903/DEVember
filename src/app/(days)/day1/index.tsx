import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        Day Details Screen
      </Text>
    </View>
  );
}

// Learnings:
// - Learned to set up a new expo project
// - Learned to use expo-font to load custom fonts
// - Learned to use the expo-splash-screen package to create a splash screen
// - Learned to use the expo-router package to create a stack navigator to navigate between screens
