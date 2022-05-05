import * as React from "react";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { NativeBaseProvider, Text } from "native-base";
import HomeScreen from "../views/HomeScreen";
import UserInfoScreen from "../views/UserInfoScreen";
import { RootStackParamList, Stack } from "../lib/constants";

const config = {
  initialRouteName: "Home",
  screens: {
    Home: "home",
    User: "user",
  },
};

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    Linking.createURL("/"),
    "exp://",
    "deep://",
  ],
  config,
};

const nativeBaseConfig = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

function App() {
  return (
    <NativeBaseProvider config={nativeBaseConfig}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User" component={UserInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
