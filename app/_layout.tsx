import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Trang trình bày",
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Liên hệ",
        }}
      />
    </Tabs>
  );
}
