import { getRange } from "@/utils/getRange";
import { StyleSheet } from "react-native";

const BASE_SPACING_PX = 4;

export const ThemeTypography = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});

const SpacingKeys = getRange(16).map((i) => `spacing_${i}` as const);
type SpacingKeyType = (typeof SpacingKeys)[number];
export const ThemeSpacing = Object.fromEntries(
  SpacingKeys.map((key, i) => [key, i * BASE_SPACING_PX]),
) as Record<SpacingKeyType, number>;

export const ThemeColors = {
  background: "#fff",
};
