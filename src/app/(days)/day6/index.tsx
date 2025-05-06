import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Tinder Swipe Animation

Create a Tinder-like swipe animation using React Native Reanimated and Gesture Handler.

📚 Learnings:
- Using the Reanimated library to create smooth animations
- Using the react-native-gesture-handler library to handle gestures
`;

export default function index() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: Tinder" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day6/tinder" asChild>
        <Button title="Go to Tinder" />
      </Link>
    </SafeAreaView>
  );
}