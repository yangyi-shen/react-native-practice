import { GalleryFlatList } from "@/components/gallery-flat-list";
import { ThemePageStructures, ThemeTypography } from "@/constants/theme";
import { ScrollView, Text, View } from "react-native";

export default function Gallery() {
  return (
    <ScrollView style={ThemePageStructures.main}>
      <View style={ThemePageStructures.headerView}>
        <Text style={ThemeTypography.title}>
          Trang trình bày ảnh trứng vịt lộn
        </Text>
      </View>
      <View style={ThemePageStructures.bodyView}>
        <Text style={ThemeTypography.default}>
          Ở đậy, bạn có thể ngắm và hưởng thức những bước ảnh của nhiều loại
          trứng vịt lộn.
        </Text>
      </View>
      <GalleryFlatList />
    </ScrollView>
  );
}
