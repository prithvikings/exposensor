import { StyleSheet, View } from "react-native";
import StepCounter from "../../components/step-counter";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <TiltCounter /> */}
      {/* <RotationIndicator /> */}
      {/* <Compass /> */}
      {/* <LightMood /> */}
      <StepCounter />
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
