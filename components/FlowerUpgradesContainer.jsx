import { Text, ScrollView, SafeAreaProvider, SafeAreaView } from "react-native";

export default function FlowerUpgradesContainer(props) {
  function handleUpgrade() {
    props.onPress(props.upgrade);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView className="flowerUpgradesContainer">
          <Text>{props.upgrade.powerUpName}</Text>
          <Text>Flowers Per Second: {props.upgrade.increase}</Text>
          <Text>Cost: {props.upgrade.cost} flowers</Text>
          <button onClick={handleUpgrade}>Buy</button>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
