import React from "react";
import {View, Text} from "react-native";
import BasicTabHeader from "./basicTabHeader";
import {alignments, basicPadding, colors, largeText} from "../../styles";

const BasicTabView = props => {
  return (
    <View style={[{backgroundColor: colors.bgPrimary}, alignments.flexGrow]}>
      <BasicTabHeader tabName={props.tabName} />
      <View
        style={[
          !props.withoutPadding && basicPadding,
          {backgroundColor: colors.bgPrimary, paddingBottom: 0},
          alignments.flexGrow,
          alignments.flex,
        ]}>
        <View style={[alignments.flexRow, alignments.alignCenter]}>
          {props?.title && <Text style={largeText}>{props?.title}</Text>}
        </View>
        <View style={[alignments.flex]}>{props?.children}</View>
      </View>
    </View>
  );
};

export default BasicTabView;
