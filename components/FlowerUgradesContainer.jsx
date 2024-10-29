import {
  UITextView,
  UIScrollView,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native";

export default function FlowerUpgradesContainer(props) {
  function handleUpgrade() {
    props.onPress(props.upgrade);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <UIScrollView className="flowerUpgradesContainer">
          <UITextView>{props.upgrade.powerUpName}</UITextView>
          <UITextView>Flowers Per Second: {props.upgrade.increase}</UITextView>
          <UITextView>Cost: {props.upgrade.cost} flowers</UITextView>
          <button onPress={handleUpgrade}>Buy</button>
        </UIScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
