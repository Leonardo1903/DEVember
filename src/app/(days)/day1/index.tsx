import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Introduction to Expo and Expo-Router

Learn how to set up a new expo project and use the expo-router package to create a stack navigator to navigate between screens.


📚 Learnings:
- Setting up a new expo project
- Using expo-font to load custom fonts
- Using the expo-splash-screen package to create a splash screen
- Using the expo-router package to create a stack navigator to navigate between screens
`;

export default function index() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 1: Introduction" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
    </SafeAreaView>
  );
}


