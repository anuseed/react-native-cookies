import { Text, View, SafeAreaView } from "react-native";

export default function FlowersPerClickContainer(props) {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text>
          Your flower power is {props.flowersPerSecondCount} flowers per second.
        </Text>
      </View>
    </SafeAreaView>
  );
}
