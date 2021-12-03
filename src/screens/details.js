import React, {useMemo} from "react";
import {Image, Text, View} from "react-native";
import Config from "react-native-config";
import {ScrollView} from "react-native-gesture-handler";
import BasicTabView from "../components/basictab/basictab";
import {alignments, basicPadding, fillView, fillWidth, spacing} from "../styles";

const Details = props => {
  const {item} = props.route.params;

  return useMemo(
    () =>
      item && (
        <BasicTabView title={props.route.title} tabName={props.route.name} withoutPadding>
          <ScrollView>
            <View style={[fillWidth, {height: 200}]}>
              <Image
                style={[fillView]}
                source={{
                  uri: `${Config.BACKEND_URL}${item.field_lead_image}`,
                }}
              />
            </View>

            <View style={[basicPadding]}>
              <Text style={[alignments.textCenter, fillWidth, {fontWeight: "600"}]}>{item.title}</Text>
              <Text style={[alignments.textCenter, fillWidth, {marginVertical: spacing.singleAndAHalf}]}>
                {item.body}
              </Text>
            </View>
          </ScrollView>
        </BasicTabView>
      ),
    [item],
  );
};

export default Details;
