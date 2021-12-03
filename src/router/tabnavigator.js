import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {memo} from "react";
import {Image, View} from "react-native";
import {alignments, fillHeight, spacing, tabNavigatorContainer} from "../styles";
import CustomTabBarComponent from "./tabBarComponent";

function TabNavigator(props) {
  const {config} = props?.route?.params;
  const Tab = createBottomTabNavigator();

  const tabs = config.screens;

  // useEffect(() => {
  //   RNBootSplash.hide({fade: true});
  // }, []);

  return (
    <>
      <View
        style={{
          backgroundColor: tabNavigatorContainer.backgroundColor,
          height: tabNavigatorContainer.height + 20,
          paddingHorizontal: spacing.half,
          paddingVertical: spacing.half,
        }}>
        <Image
          style={[alignments.alignFlexStart, fillHeight, {width: 250, resizeMode: "contain"}]}
          // eslint-disable-next-line global-require
          source={require("./icon.png")}
        />
      </View>
      <Tab.Navigator
        tabBar={tabProps => <CustomTabBarComponent {...tabProps} tabBarOptions={config.tabBarOptions} />}
        screenOptions={{tabBarStyle: tabs?.length > 0 ? {display: "none"} : {}, headerShown: false}}
        backBehavior="history">
        {tabs?.map(tab => (
          <Tab.Screen
            key={tab.key}
            initialParams={{url: tab.url}}
            name={tab.title ?? ""}
            component={tab?.component}
            options={{...tab}}
          />
        ))}
      </Tab.Navigator>
      {props?.route?.params?.children}
    </>
  );
}

export default memo(TabNavigator);
