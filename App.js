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
          height: 300,
          padding: 20,
          // paddingHorizontal: 10,
          // paddingLeft: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "tomato",
            width: 50,
            height: 50,
            marginTop: 20,
          }}
        ></View>
      </View>
    </View>
  );
}
