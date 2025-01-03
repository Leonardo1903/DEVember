import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Onboarding

Create a multi-step onboarding screen with gestures and animations.

📚 Learnings:
- Setting up a multi-step onboarding screen
- Using the react-native-gesture-handler package to create gestures
- Using the react-native-reanimated package to animate components
`;

export default function index() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </SafeAreaView>
  );
}


