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
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 7,
          elevation: 20, // only for android
        }}
      ></View>
    </View>
  );
}
