import React from "react";
import tutorialComponent from "./App/components/tutorial_audio_player";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
