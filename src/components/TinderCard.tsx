import { Image, View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const screenWidth = Dimensions.get("screen").width;
export const tinderCardWidth = screenWidth * 0.8;

type TinderCard = {
  user: {
    image: string;
    name: string;
  };
  numOfCards: number;
  index: number;
  activeIndex: SharedValue<number>;
  onResponse: (a: boolean) => void;
};

export default function TinderCard({
  user,
  numOfCards,
  index,
  activeIndex,
  onResponse,
}: TinderCard) {
  const translationX = useSharedValue(0);

  const animateCard = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [0.95, 1, 1]
        ),
      },
      {
        translateY: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [-30, 0, 0]
        ),
      },
      {
        translateX: translationX.value,
      },
      {
        rotateZ: `${interpolate(
          translationX.value,
          [-screenWidth / 2, 0, screenWidth / 2],
          [-30, 0, 30]
        )}deg`,
      },
    ],
  }));

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translationX.value = event.translationX;

      activeIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, 500],
        [index, index + 0.8]
      );
    })
    .onEnd((event) => {
      if (Math.abs(event.translationX) > 300) {
        translationX.value = withSpring(Math.sign(event.translationX) * 500, {
          velocity: event.velocityX,
        });
        activeIndex.value = withSpring(index + 1);
        runOnJS(onResponse)(event.translationX > 0);
      } else {
        translationX.value = withSpring(0);
      }
    });

  return (
    <>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            styles.card,
            animateCard,

            {
              zIndex: numOfCards - index,
              opacity: 1 - index * 0.2,
              transform: [
                { scale: 1 - index * 0.05 },
                { translateY: -index * 30 },
              ],
            },
          ]}
        >
          <Image
            style={[StyleSheet.absoluteFillObject, styles.image]}
            source={{ uri: user.image }}
          />

          <LinearGradient
            // Background Linear Gradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={[StyleSheet.absoluteFillObject, styles.overlay]}
          />

          <View style={styles.footer}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,

    justifyContent: "flex-end",

    position: "absolute",

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    borderRadius: 15,
  },
  overlay: {
    top: "50%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  footer: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontFamily: "InterBold",
    color: "#fff",
  },
});
