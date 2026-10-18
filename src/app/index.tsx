import { StyleSheet, View } from "react-native";
import LightMood from "../../components/light-mood";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <TiltCounter /> */}
      {/* <RotationIndicator /> */}
      {/* <Compass /> */}
      <LightMood />
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
