import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import FlowerCountContainer from "./components/FlowerCountContainer";
import FlowersPerClickContainer from "./components/FlowersPerClickContainer";
import FlowerUpgradesContainer from "./components/FlowerUpgradesContainer";
import flowerData from "./lib/flowerData.json";

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

  function handleClick(upgrade) {
    if (flowerCount == upgrade.cost || flowerCount > upgrade.cost) {
      setFlowerPerSecondCount(flowersPerSecondCount + upgrade.increase);
      setFlowerCount(flowerCount - upgrade.cost);
    } else {
      Alert.alert("You do not have enough flowers to buy this power!");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlowerCountContainer flowerCount={flowerCount} addFlower={addFlower} />
      <FlowersPerClickContainer flowersPerSecondCount={flowersPerSecondCount} />
      <ScrollView>
        <Text>Powers</Text>
        {flowerData.map((upgrade) => (
          <ScrollView key={upgrade.id}>
            <FlowerUpgradesContainer upgrade={upgrade} onPress={handleClick} />
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9db83",
    alignItems: "center",
    justifyContent: "center",
  },
});
