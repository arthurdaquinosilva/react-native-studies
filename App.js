import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}
