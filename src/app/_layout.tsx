import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    SplashScreen.hideAsync();
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9b4521",
        },
        headerTintColor: "#F9EDE3",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
}
