import { ThemeColors, ThemeSpacing, ThemeTypography } from "@/constants/theme";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import trungVitLonImg from "@/assets/images/trung-vit-lon.png";

export default function Index() {
  return (
    <View style={styles.main}>
      <Image style={styles.heroImage} source={trungVitLonImg} />
      <ScrollView>
        <View style={styles.headerView}>
          <Text style={ThemeTypography.title}>
            Chào mừng vào app fan cho món Trứng Vịt Lộn!
          </Text>
        </View>
        <View style={styles.bodyView}>
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
  main: {
    flex: 1,
    backgroundColor: ThemeColors.background,
  },
  heroImage: {
    width: "100%",
    aspectRatio: 2,
  },
  headerView: {
    paddingHorizontal: ThemeSpacing.spacing_4,
    paddingVertical: ThemeSpacing.spacing_2,
  },
  bodyView: {
    paddingHorizontal: ThemeSpacing.spacing_4,
  },
});
