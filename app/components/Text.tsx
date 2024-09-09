import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { colors, fontSize } from "../theme";

interface CustomTextProps {
  size:
    | "smallest"
    | "smaller"
    | "small"
    | "medium"
    | "large"
    | "larger"
    | "largest";
  color?: string | null;
  text: string;
  style?: any | null;
  weight?: "bold" | 200 | 400 | 500 | 600 | 700 | "normal";
  numOfLines?: number;
}

const getFontSize = (size: string) => {
  switch (size) {
    case "smallest":
      return fontSize.smallest;
    case "smaller":
      return fontSize.smaller;
    case "small":
      return fontSize.small;
    case "medium":
      return fontSize.medium;
    case "large":
      return fontSize.large;
    case "larger":
      return fontSize.larger;
    case "largest":
      return fontSize.largest;
  }
};

export const CustomText: FunctionComponent<CustomTextProps> = ({
  size,
  color,
  text,
  style,
  weight,
  numOfLines,
}) => {
  return (
    <Text
      numberOfLines={numOfLines}
      ellipsizeMode="tail"
      style={[
        style,
        {
          fontSize: getFontSize(size),
          color: (color && color) || colors.primary,
          fontWeight: (weight && weight) || "normal",
        },
      ]}
    >
      {text}
    </Text>
  );
};
