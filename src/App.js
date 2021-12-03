import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";
import MainRouter from "./router";
import {alignments} from "./styles";

const App = () => {
  return (
    <SafeAreaView style={[alignments.flex]}>
      <GestureHandlerRootView style={[alignments.flex]}>
        <MainRouter />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
