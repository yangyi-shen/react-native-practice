import {
  ThemeColors,
  ThemePageStructures,
  ThemeSpacing,
  ThemeTypography,
} from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Contact() {
  function onFacebookBtnPress() {
    Alert.alert(
      "Cám ơn!",
      "Rất hào hứng bạn đã lựa chọn tham gia nhóm Facebook!",
      [
        {
          text: "Ko có chi 👌",
          style: "default",
          onPress: () =>
            Linking.openURL("https://www.facebook.com/groups/826928188175419/"),
        },
      ],
    );
  }

  return (
    <View style={ThemePageStructures.main}>
      <View style={ThemePageStructures.headerView}>
        <Text style={ThemeTypography.title}>
          Liên hệ với đội cận vệ trứng vịt lộn!
        </Text>
      </View>
      <View style={ThemePageStructures.bodyView}>
        <Text style={ThemeTypography.default}>
          Nếu bạn nghỉ trong tim mình có đủ cảm đam mê hăng hái đối với món ăn
          tuyệt vời này, hãy tham gia vào nhóm Facebook của chúng ta!
        </Text>
      </View>
      <View style={styles.FacebookBtnView}>
        <Pressable
          style={styles.FacebookBtnPressable}
          onPress={onFacebookBtnPress}
        >
          <MaterialIcons style={styles.FacebookBtnIcon} name="facebook" />
          <Text style={styles.FacebookBtnText}>Tham gia nhóm Facebook</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FacebookBtnView: {
    alignItems: "center",
    paddingTop: ThemeSpacing.spacing_4,
  },
  FacebookBtnPressable: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: ThemeColors.buttonBackground,
    gap: ThemeSpacing.spacing_2,
    paddingVertical: ThemeSpacing.spacing_1,
    paddingHorizontal: ThemeSpacing.spacing_4,
    borderRadius: ThemeSpacing.spacing_1,
  },
  FacebookBtnIcon: {
    fontSize: ThemeSpacing.spacing_9,
    color: ThemeColors.buttonContent,
  },
  FacebookBtnText: {
    ...ThemeTypography.subtitle,
    color: ThemeColors.buttonContent,
  },
});
