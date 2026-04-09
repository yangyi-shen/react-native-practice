import { ThemeSpacing } from "@/constants/theme";
import { FlatList, StyleSheet } from "react-native";
import { GalleryImage } from "./gallery-image";

import gallery1Img from "@/assets/images/gallery/gallery-1.jpg";
import gallery10Img from "@/assets/images/gallery/gallery-10.jpg";
import gallery2Img from "@/assets/images/gallery/gallery-2.jpg";
import gallery3Img from "@/assets/images/gallery/gallery-3.jpg";
import gallery4Img from "@/assets/images/gallery/gallery-4.jpg";
import gallery5Img from "@/assets/images/gallery/gallery-5.jpg";
import gallery6Img from "@/assets/images/gallery/gallery-6.jpg";
import gallery7Img from "@/assets/images/gallery/gallery-7.jpg";
import gallery8Img from "@/assets/images/gallery/gallery-8.jpg";
import gallery9Img from "@/assets/images/gallery/gallery-9.jpg";

export function GalleryFlatList() {
  const galleryImages = [
    gallery1Img,
    gallery2Img,
    gallery3Img,
    gallery4Img,
    gallery5Img,
    gallery6Img,
    gallery7Img,
    gallery8Img,
    gallery9Img,
    gallery10Img,
  ];

  return (
    <FlatList
      style={styles.galleryFlatList}
      contentContainerStyle={styles.galleryFlatListGapStyle}
      columnWrapperStyle={styles.galleryFlatListGapStyle}
      data={galleryImages}
      numColumns={2}
      renderItem={({ item }) => <GalleryImage source={item} />}
      scrollEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  galleryFlatList: {
    paddingHorizontal: ThemeSpacing.spacing_4,
    paddingVertical: ThemeSpacing.spacing_2,
    gap: ThemeSpacing.spacing_2,
    /* gap handled by galleryFlatListGapStyle */
  },
  galleryFlatListGapStyle: {
    gap: ThemeSpacing.spacing_1,
  },
});
