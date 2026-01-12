import { View } from "react-native";

import CustomText from "./app/components/CustomText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomText>Lorem ipsum dolor sit amet</CustomText>
    </View>
  );
}
