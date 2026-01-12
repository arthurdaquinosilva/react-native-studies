import { Text } from "react-native";
import styles from "./styles"

function CustomText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}



export default CustomText;
