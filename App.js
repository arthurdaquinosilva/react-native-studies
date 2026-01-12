import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textDecorationLine: "underline",
          textAlign: "center",
          lineHeight: 40,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        quod id aliquam possimus mollitia! Dicta optio at unde asperiores sit
        error commodi aliquid.
      </Text>
    </View>
  );
}
