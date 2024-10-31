import { Text, View, SafeAreaView } from "react-native";

export default function FlowersPerClickContainer(props) {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 17 }}>
          Your flower power is{" "}
          <Text style={{ fontSize: 30 }}>{props.flowersPerSecondCount}</Text>{" "}
          flowers per second.
        </Text>
      </View>
    </SafeAreaView>
  );
}
