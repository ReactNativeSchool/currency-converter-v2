import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import Options from "../screens/Options";
import Themes from "../screens/Themes";
import { ThemeContext } from "../util/ThemeContext";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false
      }}
    />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen name="Themes" component={Themes} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <ModalStack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ navigation, route }) => ({
          title: route.params && route.params.title,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{ paddingHorizontal: 10 }}
            >
              <Entypo name="cross" size={30} color={themeColor} />
            </TouchableOpacity>
          ),
          headerLeft: null
        })}
      />
    </ModalStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
