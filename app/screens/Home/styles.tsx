import { StyleSheet } from "react-native";
import { colors, generalStyles } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },
  elementContainer: {
    width: "100%",
    paddingHorizontal: generalStyles.paddingMedium,
    paddingVertical: generalStyles.paddingSmaller,
    alignItems: "center",
    justifyContent: "center",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  messageHeight: {
    height: 55,
  },
  titleHeight: {
    height: 55,
  },
  button: {
    width: "100%",
    height: 42,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: generalStyles.generalRadius,
    paddingHorizontal: generalStyles.marginMedium,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
});
