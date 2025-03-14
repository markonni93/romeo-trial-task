import { View, Pressable, Text, Animated, StyleSheet } from "react-native";
import useRotateAnimation from "./utils/ButtonAnimation";

type SecondaryButtonProp = {
  title: string;
  isLoading: boolean;
  onClick: () => void;
};

function RomeoSecondaryButton(props: SecondaryButtonProp) {
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
      tintColor={"#00BDFF"}
      source={require("../assets/images/spinner.png")}
    />
  ) : (
    <Text style={styles.secondaryButtonText}>{props.title}</Text>
  );
  return (
    <View style={styles.secondaryButtonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
        onPress={props.onClick}
      >
        {view}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  secondaryButtonContainer: {
    height: 44,
    overflow: "hidden",
    alignContent: "center",
    margin: 16,
    borderRadius: 4,
    borderColor: "#00BDFF",
    borderWidth: 2,
  },
  secondaryButtonText: {
    color: "#00BDFF",
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

export default RomeoSecondaryButton;
