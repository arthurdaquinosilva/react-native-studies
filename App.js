import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import CustomText from "./app/components/CustomText.ios";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomText>Something here...</CustomText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}
