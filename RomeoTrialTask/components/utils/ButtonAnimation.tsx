import { useEffect } from "react";
import { Animated, useAnimatedValue, Easing } from "react-native";

function useRotateAnimation(isLoading: boolean) {
  const rotateAnim = useAnimatedValue(0);
  useEffect(() => {
    let animation: Animated.CompositeAnimation | null = null;

    if (isLoading) {
      animation = Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      animation.start();
    } else {
      rotateAnim.stopAnimation(() => {
        rotateAnim.setValue(0);
      });
    }
    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [isLoading, rotateAnim]);

  return rotateAnim;
}

export default useRotateAnimation;
