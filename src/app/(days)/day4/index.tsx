import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Animated Splash Screen

Create a splash screen with animations to make your app more engaging.

📚 Learnings:
- Create an animated splash screen
- Use Lottie animations using lottie-react-native
- Linked it with the actual splash screen of the app
`;

export default function index() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: SplashScreen" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day4/animation" asChild>
        <Button title="Go to animation" />
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title="Splash Screen Animation" />
      </Link>
    </SafeAreaView>
  );
}
