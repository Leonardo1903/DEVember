import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StatusBar } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideOutLeft,
  SlideInRight,
} from "react-native-reanimated";

const OnboardingSteps = [
  {
    title: "Track every transaction",
    description:
      "Keep track of every transaction you make. We will help you manage your expenses.",
    image: "money-bill-transfer",
  },
  {
    title: "Set your budget",
    description:
      "Set your budget and we will help you keep track of your expenses.",
    image: "wallet",
  },
  {
    title: "Get notified",
    description:
      "Get notified when you are about to exceed your budget. We will help you manage your expenses.",
    image: "bell",
  },
];

export default function Onboarding() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = OnboardingSteps[screenIndex];

  const handleContinue = () => {
    const lastScreen = screenIndex === OnboardingSteps.length - 1;

    if (lastScreen) {
      setScreenIndex(0);
      router.back();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const handleBack = () => {
    const firstScreen = screenIndex === 0;

    if (firstScreen) {
      setScreenIndex(0);
      router.back();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const handleSkip = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(handleContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(handleBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.stepIndicatorContainer}>
        {OnboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? "#CEF202" : "grey" },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome6
              style={styles.image}
              name={data.image}
              size={150}
              color="#CEF202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonRow}>
              <Text onPress={handleSkip} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={handleContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
    padding: 20,
  },
  pageContent: {
    flex: 1,
    padding: 20,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "Inter",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "InterRegular",
    lineHeight: 30,
  },
  footer: {
    marginTop: "auto",
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,

    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});
