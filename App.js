import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useState, useEffect } from "react";
import FlowerCountContainer from "./components/FlowerCountContainer";
import FlowersPerClickContainer from "./components/FlowersPerClickContainer";
import FlowerUpgradesContainer from "./components/FlowerUpgradesContainer";
import flowerData from "./lib/flowerData.json";
import SideBar from "./components/SideBar";
import { Node } from "react";
import MenuDrawer from "react-native-side-drawer";

const Drawer = (props) => {
  const position = "left";
  const drawerContent = () => (
    <SafeAreaView style={styles.drawerContent}>
      <Text style={styles.drawerHeader}>Upgrades</Text>
      <ScrollView>
        {flowerData.map((upgrade) => (
          <FlowerUpgradesContainer
            key={upgrade.id}
            upgrade={upgrade}
            onPress={props.handleClick}
          />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={props.toggleDrawer} style={styles.closeButton}>
        <Text style={styles.closeText}>Close Upgrades</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <MenuDrawer
      open={props.open}
      drawerContent={drawerContent()}
      position={position}
      drawerPercentage={40}
      animationTime={250}
      overlay={true}
      opacity={0.5}
    >
      {props.children}
    </MenuDrawer>
  );
};

export default function App() {
  const [flowersPerSecondCount, setFlowerPerSecondCount] = useState(1);
  const [flowerCount, setFlowerCount] = useState(0);
  const [openDrawer, setDrawerOpen] = useState(false);

  function addFlower() {
    setFlowerCount(flowerCount + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowerCount(
        (currentFlowers) => currentFlowers + flowersPerSecondCount
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [flowersPerSecondCount]);

  function handleClick(upgrade) {
    if (flowerCount == upgrade.cost || flowerCount > upgrade.cost) {
      setFlowerPerSecondCount(flowersPerSecondCount + upgrade.increase);
      setFlowerCount(flowerCount - upgrade.cost);
    } else {
      Alert.alert("You do not have enough flowers to buy this power!");
    }
  }

  const toggleDrawer = () => setDrawerOpen(!openDrawer);

  return (
    <Drawer
      open={openDrawer}
      toggleDrawer={toggleDrawer}
      handleClick={handleClick}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <FlowerCountContainer flowerCount={flowerCount} addFlower={addFlower} />
        <FlowersPerClickContainer
          flowersPerSecondCount={flowersPerSecondCount}
        />

        <TouchableOpacity onPress={toggleDrawer} style={styles.openButton}>
          <Text style={styles.openText}>Open Upgrades</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Drawer>

    // <SafeAreaView>
    //   <SideBar />
    //   <View style={styles.container}>
    //     <StatusBar style="auto" />
    //     <FlowerCountContainer flowerCount={flowerCount} addFlower={addFlower} />
    //     <FlowersPerClickContainer
    //       flowersPerSecondCount={flowersPerSecondCount}
    //     />

    //     <ScrollView>
    //       <Text>Powers</Text>
    //       {flowerData.map((upgrade) => (
    //         <ScrollView key={upgrade.id}>
    //           <FlowerUpgradesContainer
    //             upgrade={upgrade}
    //             onPress={handleClick}
    //           />
    //         </ScrollView>
    //       ))}
    //     </ScrollView>
    //   </View>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: "#f9db83",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9db83",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerContent: {
    flex: 1,
    backgroundColor: "#ffebcd",
    padding: 20,
  },
  drawerHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ff6347",
    alignItems: "center",
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
  openButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#20b2aa",
    alignItems: "center",
  },
  openText: {
    color: "white",
    fontWeight: "bold",
  },
});
