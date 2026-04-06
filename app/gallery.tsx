import { StyleSheet, Text, View } from "react-native";

export default function Gallery() {
  return (
    <View style={styles.main}>
      <Text>Đây là trang trình bày ảnh.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
