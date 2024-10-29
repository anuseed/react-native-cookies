import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlowerCountContainer from "./components/FlowerCountContainer";
import FlowersPerClickContainer from "./components/FlowersPerClickContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <FlowerCountContainer />
      <FlowersPerClickContainer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
