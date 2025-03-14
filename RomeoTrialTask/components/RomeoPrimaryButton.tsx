import { Pressable, Text, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useRotateAnimation from "./utils/ButtonAnimation";

type ButtonProp = {
  title: string;
  isLoading: boolean;
  onClick: () => void;
};

function RomeoPrimaryButton(props: ButtonProp) {
  const rotation = useRotateAnimation(props.isLoading).interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  let view = props.isLoading ? (
    <Animated.Image
      style={{
        alignSelf: "center",
        marginVertical: 8,
        transform: [{ rotate: rotation }],
      }}
      source={require("../assets/images/spinner.png")}
    />
  ) : (
    <Text style={styles.primaryButtonText}>{props.title}</Text>
  );

  return (
    <LinearGradient
      colors={["#00BDFF", "#007CC8"]}
      style={styles.primaryButtonContainer}
    >
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
        onPress={props.onClick}
        android_ripple={{ color: "#00BDFF" }}
      >
        {view}
      </Pressable>
    </LinearGradient>
  );
}

export default RomeoPrimaryButton;

const styles = StyleSheet.create({
  primaryButtonContainer: {
    height: 40,
    overflow: "hidden",
    alignContent: "center",
    margin: 16,
    borderRadius: 4,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 2 },
    marginVertical: 8,
    shadowRadius: 6,
    shadowOpacity: 0.75,
  },
  innerContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
  loading: {
    alignSelf: "center",
    marginVertical: 8,
  },
});
