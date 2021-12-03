import React from "react";
import {Image, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {goBack} from "../../router/settings";
import {alignments, basicPadding, largeText, spacing} from "../../styles";

const BasicTabHeader = ({tabName}) => {
  return (
    <View style={[alignments.flexRow, alignments.alignCenter, basicPadding, {paddingVertical: spacing.doubleAndHalf}]}>
      <TouchableOpacity onPress={goBack} style={[{marginRight: spacing.double}]}>
        <Image
          source={
            // eslint-disable-next-line global-require
            require("./arrow.png")
          }
        />
      </TouchableOpacity>

      <Text style={[largeText]}>{tabName}</Text>
    </View>
  );
};

export default BasicTabHeader;
