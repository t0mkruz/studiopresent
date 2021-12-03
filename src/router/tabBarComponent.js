import React, {useCallback, useMemo} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {alignments, fillHeight, getDevice, NUM_OF_TABS, tabIcon, tabNavigatorContainer, tabText} from "../styles";

const TabItem = props => {
  const {descriptors, route, index, state, navigation, tabBarOptions, numOfElements} = props;
  const {options} = descriptors[route.key];

  const isFocused = useCallback(() => {
    if (state.routes.find(item => item.name === "TabMenuRouter")) {
      if (state.index < NUM_OF_TABS - 1) {
        return state.index === index;
      }
      return false;
    }
    return state.index === index;
  }, [state.index]);

  const {title} = options;
  const tintColor = isFocused() ? tabBarOptions.activeTintColor : tabBarOptions.inactiveTintColor;

  const onPress = useCallback(() => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused() && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  }, [state.index]);

  return (
    <TouchableOpacity
      key={`TAB_${route.key}`}
      onPress={onPress}
      style={[
        {
          width: `${100 / numOfElements}%`,
          ...(getDevice() > 1 ? {maxWidth: tabIcon.itemWidth} : {}),
        },
        fillHeight,
        alignments.centerBasic,
        {backgroundColor: tabBarOptions.background},
      ]}>
      <Text style={[tabText, {color: tintColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

function CustomTabBarComponent(props) {
  const {state} = props;

  const tabs = state.routes;
  const renderItem = useCallback(
    (route, index) => <TabItem key={route.key} {...props} route={route} index={index} numOfElements={tabs.length} />,
    [state],
  );

  return useMemo(
    () => (
      <View style={[{height: tabNavigatorContainer.height}]}>
        <View style={[tabNavigatorContainer]}>{tabs.map(renderItem)}</View>
      </View>
    ),
    [state],
  );
}
export default CustomTabBarComponent;
