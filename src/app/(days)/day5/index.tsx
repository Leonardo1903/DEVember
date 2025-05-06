import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Airbnb Maps

Create a map screen similar to Airbnb's map screen. This will include a map with markers and a bottom sheet that shows the details of the selected marker.

📚 Learnings:
- Using the MapView component from react-native-maps
- Using custom markers on the map
- Using the BottomSheet component from @gorhom/bottom-sheet
`;

export default function index() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: Maps" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day5/airbnb" asChild>
        <Button title="Go to Airbnb Map" />
      </Link>
    </SafeAreaView>
  );
}
