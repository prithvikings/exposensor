import { StyleSheet, View } from "react-native";
import Compass from "../../components/compass";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <TiltCounter /> */}
      {/* <RotationIndicator /> */}
      <Compass />
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
