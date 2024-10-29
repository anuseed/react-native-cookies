import { Text, View } from "react-native";

export default function FlowersPerClickContainer(props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>
        Your flower power is {props.flowersPerSecondCount} flowers per second.
      </Text>
    </View>
  );
}
