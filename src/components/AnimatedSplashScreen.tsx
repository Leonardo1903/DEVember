import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import Animated, { ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function AnimatedSplashScreen({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <AnimatedLottieView
        exiting={ZoomOut.duration(300)}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={{
          width: "80%",
          maxWidth: 400,
          height: 200,
        }}
        source={require("@assets/lottie/Netflix.json")} 
      />
    </View>
  );
}

