import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {Text, View} from "react-native";
import Config from "react-native-config";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import Details from "../screens/details";
import Screen from "../screens/screen";
import {alignments, fillView, tabColors} from "../styles";
import {basicScreenPreset, navigationRef} from "./settings";
import TabNavigator from "./tabnavigator";

const Stack = createSharedElementStackNavigator();

const linking = {
  config: {
    initialRouteName: "TabNavigator",
    screens: {
      Details: "Details",
    },
  },
};

const config = {
  screens: [
    {key: "Day at SP", component: Screen, title: "Day at SP", url: `${Config.BACKEND_URL}/rest/dayatsp`},
    {key: "Projects", component: Screen, title: "Projects", url: `${Config.BACKEND_URL}/rest/projects`},
    {key: "Blogs", component: Screen, title: "Blogs", url: `${Config.BACKEND_URL}/rest/blogs`},
  ],
  tabBarOptions: {
    ...tabColors,
    safeAreaInset: {bottom: "never", top: "never"},
  },
};

const MainRouter = () => (
  <NavigationContainer
    ref={navigationRef}
    linking={linking}
    fallback={
      <View style={[fillView, alignments.centerBasic]}>
        <Text>Loading...</Text>
      </View>
    }>
    <Stack.Navigator screenOptions={basicScreenPreset}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} initialParams={{config}} />
      <Stack.Screen name="Details" component={Details} initialParams={{config}} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default React.memo(MainRouter);
