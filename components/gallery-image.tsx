import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function GalleryImage({ source }: { source: any }) {
  return <Image style={styles.galleryImage} source={source} />;
}

const styles = StyleSheet.create({
  galleryImage: {
    flex: 1,
    aspectRatio: 1,
  },
});
