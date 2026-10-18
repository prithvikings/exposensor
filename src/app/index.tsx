import { StyleSheet, View } from "react-native";
import RotationIndicator from "../../components/rotation-indicator";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <TiltCounter /> */}
      <RotationIndicator />
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
