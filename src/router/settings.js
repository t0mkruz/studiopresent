import {CardStyleInterpolators, TransitionPresets} from "@react-navigation/stack";
import React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function canNavigate() {
  return !!navigationRef.current?.navigate;
}
export function goBack() {
  navigationRef.current?.goBack();
}

export const basicScreenPreset = {
  gestureEnabled: true,
  headerShown: false,
  presentation: "transparentModal",
  cardOverlayEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
  cardStyleInterpolator: props => ({
    ...CardStyleInterpolators.forHorizontalIOS(props),
    overlayStyle: {
      opacity: props.current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
      }),
    },
  }),
};
