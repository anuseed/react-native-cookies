import { Text, ScrollView, SafeAreaView, Button } from "react-native";

export default function FlowerUpgradesContainer(props) {
  function handleUpgrade() {
    props.onPress(props.upgrade);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{props.upgrade.powerUpName}</Text>
        <Text>Flowers Per Second: {props.upgrade.increase}</Text>
        <Text>Cost: {props.upgrade.cost} flowers</Text>
        <Button title="Buy" onPress={handleUpgrade}>
          Buy
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
