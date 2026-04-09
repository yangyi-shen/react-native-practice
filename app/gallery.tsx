import { GalleryFlatList } from "@/components/gallery-flat-list";
import { ThemeColors, ThemeSpacing, ThemeTypography } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Gallery() {
  return (
    <View style={styles.main}>
      <View style={styles.headerView}>
        <Text style={ThemeTypography.title}>
          Trang trình bày ảnh trứng vịt lộn
        </Text>
      </View>
      <View style={styles.bodyView}>
        <Text style={ThemeTypography.default}>
          Ở đậy, bạn có thể ngắm và hưởng thức những bước ảnh của nhiều loại
          trứng vịt lộn.
        </Text>
      </View>
      <GalleryFlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: ThemeColors.background,
  },
  headerView: {
    paddingHorizontal: ThemeSpacing.spacing_4,
    paddingVertical: ThemeSpacing.spacing_2,
  },
  bodyView: {
    paddingHorizontal: ThemeSpacing.spacing_4,
  },
});
