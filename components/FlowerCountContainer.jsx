import { Image, Pressable, Text, View } from "react-native";
import flower from "../assets/flower.png";

export default function FlowerCountContainer(props) {
  return (
    <View style={{ margin: 20, padding: 20 }}>
      <Text>You have {props.flowerCount} flowers.</Text>
      <Pressable onPress={props.addFlower}>
        <Image source={flower} style={{ width: 200, height: 200 }} />
      </Pressable>
    </View>
  );
}
