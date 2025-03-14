import { StyleSheet, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RadarScreen from "./radar/RadarScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./login/LoginScreen";

const Stack = createNativeStackNavigator();

function RomeoLogo() {
  return (
    <Image style={styles.logo} source={require("./assets/images/romeo.png")} />
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              statusBarBackgroundColor: "black",
              contentStyle: {
                backgroundColor: "black",
              },
              headerStyle: {
                backgroundColor: "black",
              },
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerTitle: (props) => <RomeoLogo />,
              }}
            />
            <Stack.Screen
              name="RadarScreen"
              component={RadarScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
  },
});
