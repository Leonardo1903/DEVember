import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function index() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text>index</Text>

      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding " />
      </Link>
    </View>
  );
}

// Learnings:
// - Learned to set up a multi-step onboarding screen
// - Learned to use the react-native-gesture-handler package to create gestures
// - Learned to use the react-native-reanimated package to animate components
