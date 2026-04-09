import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const tabBarIconSize = 32;

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              style={styles.tabBarIcon}
              name="home"
              size={tabBarIconSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Trang trình bày",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              style={styles.tabBarIcon}
              name="dashboard"
              size={tabBarIconSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Liên hệ",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              style={styles.tabBarIcon}
              name="call"
              size={tabBarIconSize}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    height: "100%",
  },
});
