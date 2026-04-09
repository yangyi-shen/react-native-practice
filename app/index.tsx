import { ThemePageStructures, ThemeTypography } from "@/constants/theme";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import trungVitLonImg from "@/assets/images/trung-vit-lon.png";

export default function Index() {
  return (
    <View style={ThemePageStructures.main}>
      <Image style={styles.heroImage} source={trungVitLonImg} />
      <ScrollView>
        <View style={ThemePageStructures.headerView}>
          <Text style={ThemeTypography.title}>
            Chào mừng vào app fan cho món Trứng Vịt Lộn!
          </Text>
        </View>
        <View style={ThemePageStructures.bodyView}>
          <Text style={ThemeTypography.default}>
            Trứng vịt lộn là một món ăn thôm ngon được làm từ trứng vịt mà ở
            trong còn có vịt. Món này rất phỏ biến trong rất nhiều quốc gia,
            nhưng chỉ có bản được chuẩn bị trong miền nam Việt Nam mới là ngon
            nhất.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    width: "100%",
    aspectRatio: 2,
  },
});
