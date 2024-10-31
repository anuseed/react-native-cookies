import { Text, View, SafeAreaView, ScrollView, Button } from "react-native";

export default function FlowerUpgradesContainer(props) {
  function handleUpgrade() {
    props.onPress(props.upgrade);
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontFamily: "Twelny" }}>{props.upgrade.powerUpName}</Text>
      <Text>Flowers Per Second: {props.upgrade.increase}</Text>
      <Text>Cost: {props.upgrade.cost} flowers</Text>
      <Button
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#20b2aa",
          alignItems: "center",
        }}
        title="Buy"
        onPress={handleUpgrade}
      >
        Buy
      </Button>
    </ScrollView>
  );
}
