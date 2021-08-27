import React from "react";
import { ImageBackground, StyleSheet, View, ViewComponent } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from "../navigation/AppNavigator";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="contain"
        source={require("../assets/backgroundImages/welcomeScreen.jpg")}
      ></ImageBackground>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
