import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./src/screens/Homescreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Android</Text>
      <Homescreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
