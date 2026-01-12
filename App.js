import { View } from "react-native";
import CustomText from "./app/components/CustomText";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
      <CustomText>Something here...</CustomText>
    </View>
  );
}
