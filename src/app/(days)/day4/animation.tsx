import { View, Text, Button } from "react-native";
import { useRef } from "react";
import LottieView from "lottie-react-native";
import Netflix from "@assets/lottie/Netflix.json";

export default function animation() {
  const animation = useRef<LottieView>(null);
  return (
    <View>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={Netflix}
      />
      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Reset" onPress={() => animation.current?.reset()} />
    </View>
  );
}
