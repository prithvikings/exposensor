import { StyleSheet, View } from "react-native";
import TiltCounter from "../../components/tilt-counter";

export default function Index() {
  return (
    <View style={styles.container}>
      <TiltCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
