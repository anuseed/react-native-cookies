import { Image, Pressable, Text, View } from "react-native";
import flower from "../assets/flower.png";

export default function FlowerCountContainer(props) {
  return (
    <View style={{ margin: 20, padding: 20 }}>
      <Text>You have {props.flowerCount} flowers.</Text>
      {/* in order to make an image "clickable" in react native you need to wrap it with Pressable and give it the property of onPress */}
      <Pressable onPress={props.addFlower}>
        <Image source={flower} style={{ width: 200, height: 200 }} />
      </Pressable>
    </View>
  );
}
