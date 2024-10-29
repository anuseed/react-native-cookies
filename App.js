import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import FlowerCountContainer from "./components/FlowerCountContainer";
import FlowersPerClickContainer from "./components/FlowersPerClickContainer";

export default function App() {
  const [flowersPerSecondCount, setFlowerPerSecondCount] = useState(1);
  const [flowerCount, setFlowerCount] = useState(0);

  function addFlower() {
    setFlowerCount(flowerCount + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowerCount(
        (currentFlowers) => currentFlowers + flowersPerSecondCount
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [flowersPerSecondCount]);
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
