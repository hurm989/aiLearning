import 'react-native-gesture-handler';
import React from "react";
import { View, Text } from "react-native";
import AppStack from "./configuration/navigations/StackNav";
import { Provider } from "react-redux";
import store from './configuration/redux/store';
export default function App() {
  return <>
  {/* <View> */}
    {/* <Provider store={store}> */}
      <AppStack />
    {/* </Provider> */}
    {/* </View> */}
  </>
}