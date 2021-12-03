import React from "react";
import {Image, Text, View} from "react-native";
import Config from "react-native-config";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {navigationRef} from "../../router/settings";
import {
  alignments,
  basicBorderRadius,
  basicCardPadding,
  basicPadding,
  boldTextPrimary,
  colors,
  fillView,
  fillWidth,
  spacing,
} from "../../styles";

const ListItem = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigationRef.current?.navigate("Details", {item: props})}
      delayLongPress={100}>
      <View style={[basicPadding, {position: "relative", marginBottom: spacing.double}]}>
        <View style={[fillWidth, {height: 200}]}>
          <Image
            style={[fillView, basicBorderRadius]}
            source={{
              uri: `${Config.BACKEND_URL}${props.field_lead_image}`,
            }}
          />
        </View>
        <View
          style={[
            alignments.absolute,
            {
              backgroundColor: colors.white,
              left: "20%",
              right: "20%",
              bottom: 0,
            },
            basicCardPadding,
            basicBorderRadius,
          ]}>
          <Text style={[boldTextPrimary]}>{props.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ListItem;
