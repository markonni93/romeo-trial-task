import { View, StyleSheet, ImageBackground, Image } from "react-native";
import RomeoPrimaryButton from "../components/RomeoPrimaryButton";
import RomeoSecondaryButton from "../components/RomeoSecondaryButton";
import RomeoInputText from "../components/RomeoInputText";

function LoginScreen({ navigation }) {
  function onLoginClickHandler() {
    navigation.navigate("RadarScreen");
  }
  function onSignupClickHandler() {}

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("../assets/images/background.png")}
      >
        <View style={{ marginTop: 32 }}>
          <RomeoInputText />
        </View>
        <RomeoInputText />

        <RomeoPrimaryButton
          title="Log in"
          isLoading={false}
          onClick={onLoginClickHandler}
        />

        <RomeoSecondaryButton
          title="Sign up!"
          isLoading={false}
          onClick={onSignupClickHandler}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
});

export default LoginScreen;
