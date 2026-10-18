import { Accelerometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const TiltCounter = () => {
  const [tilt, setTilt] = useState("stable");

  useEffect(() => {
    const sub = Accelerometer.addListener(({ x, y }) => {
      if (Math.abs(x) > 0.4) setTilt(x > 0 ? "right" : "left");
      else if (Math.abs(y) > 0.4) setTilt(y > 0 ? "up" : "down");
      else setTilt("stable");
    });
    return () => sub.remove();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tilt: {tilt}</Text>
    </View>
  );
};

export default TiltCounter;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
