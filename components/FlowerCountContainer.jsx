import { Image, View, Text } from "react-native";
import flower from "../assets/flower.png";

export default function FlowerCountContainer(props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>You have {props.flowerCount} flowers.</Text>
      <Image source={flower} style={{ width: 200, height: 200 }} />
    </View>
  );
}
