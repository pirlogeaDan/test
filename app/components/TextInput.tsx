import React from "react";
import {
  TextInput,
  StyleSheet,
  Platform,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { colors, fontSize, generalStyles } from "../theme";
import { CustomText } from "./Text";

interface CustomTextInputProps {
  value: string | undefined;
  placeHolder?: string | undefined;
  onChange: (text: string) => void;
  submitEditing?: () => void;
  type?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  blurOnSubmit?: boolean;
  containerType?: "new" | "invalid" | "valid";
  ref: any;
  borderColor: string;
}

export const InputText = React.forwardRef(
  (props: CustomTextInputProps, ref: any) => {
    return (
      <View
        style={[
          props.containerType ? styles[props.containerType] : styles.new,
          { borderColor: props.borderColor },
        ]}
      >
        <TextInput
          ref={ref}
          style={styles.inputText}
          placeholder={props.placeHolder}
          placeholderTextColor={colors.disabled}
          onChangeText={(text) => props.onChange(text)}
          value={props.value}
          inlineImageLeft="search_icon"
          underlineColorAndroid={"transparent"}
          allowFontScaling={false}
          autoCorrect={false}
          textContentType="none"
          onBlur={Platform.OS === "ios" ? Keyboard.dismiss : undefined}
          keyboardType={
            props.type
              ? props.type
              : Platform.OS === "ios"
              ? "ascii-capable"
              : "default"
          }
          returnKeyType={props.returnKeyType}
          blurOnSubmit={props.blurOnSubmit || true}
          onSubmitEditing={() => {
            if (props.submitEditing) {
              props.submitEditing();
            }
          }}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
    width: "100%",
    fontSize: fontSize.medium,
    color: colors.primary,
    textAlign: "center",
  },
  new: {
    width: "100%",
    height: 42,
    borderWidth: 1,
    borderRadius: generalStyles.generalRadius,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  invalid: {
    width: "100%",
    height: 42,
    borderWidth: 1,
    borderRadius: generalStyles.generalRadius,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  valid: {
    width: "100%",
    height: 42,
    borderWidth: 1,
    borderRadius: generalStyles.generalRadius,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
});
