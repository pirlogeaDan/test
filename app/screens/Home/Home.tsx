import React, { useEffect, useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
  FlatList,
} from "react-native";
import { useHistoryValidationContext } from "../../context";
import { CustomText, InputText } from "../../components";
import { colors, generalStyles } from "../../theme";
import { StatusBar } from "expo-status-bar";
import {
  getValidationMessage,
  getValidationTitle,
  getTitleColor,
  isValidIBANNumber,
} from "./presenter";
import { styles } from "./styles";

export type PlanDays = "valid" | "new" | "invalid";

const HomeFC: React.FC<{}> = () => {
  const [iban, setIban] = useState<string>("");
  const [isIbanValid, setIsIbanValid] = useState<PlanDays>();
  const { ibanSavedList, setIbanSavedList } = useHistoryValidationContext();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [title, setTitle] = useState<string>(getValidationTitle(isIbanValid));
  const [message, setMessage] = useState<string>(
    getValidationMessage(isIbanValid)
  );
  const [color, setColor] = useState<string>(getTitleColor(isIbanValid));
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const checkIban = (iban: String) => {
    setIsIbanValid(isValidIBANNumber(iban) ? "valid" : "invalid");
  };

  const mock = [2, 2, 3, 4];

  useEffect(() => {
    if (iban) {
      checkIban(iban);
    } else {
      setIsIbanValid("new");
    }
  }, [iban]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setMessage(getValidationMessage(isIbanValid));
      setTitle(getValidationTitle(isIbanValid));
      setColor(getTitleColor(isIbanValid));
      setIsButtonVisible(isIbanValid === "valid");
      setIsListVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  }, [isIbanValid]);

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={true}>
      <StatusBar style="auto" />

      <View>
        <Animated.View style={{ opacity: fadeAnim }}>
          <CustomText
            size={"small"}
            text={title}
            weight={"bold"}
            style={[
              styles.elementContainer,
              styles.textAlignCenter,
              styles.titleHeight,
            ]}
            color={color}
          />
        </Animated.View>
        <View style={styles.elementContainer}>
          <InputText
            value={iban}
            onChange={(iban) => {
              setIban(iban);
            }}
            containerType={isIbanValid}
            borderColor={color}
          />
        </View>
        <Animated.View style={{ opacity: fadeAnim, alignItems: "center" }}>
          <CustomText
            size={"smaller"}
            text={message}
            weight={500}
            style={[
              styles.elementContainer,
              styles.textAlignCenter,
              styles.messageHeight,
            ]}
            color={colors.disabled}
          />
          {isButtonVisible && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setIbanSavedList((prev) => [
                  { iban: iban, id: ibanSavedList.length },
                ]);
              }}
            >
              <CustomText
                size={"smaller"}
                text={"Save IBAN"}
                weight={500}
                style={styles.textAlignCenter}
                color={"white"}
              />
            </TouchableOpacity>
          )}
          {isListVisible && (
            <FlatList
              data={ibanSavedList}
              style={{ width: "100%", marginTop: 20 }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <CustomText
                    size={"smaller"}
                    text={item.iban.toString()}
                    weight={500}
                    style={styles.textAlignCenter}
                    color={colors.primary}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export const Home = HomeFC;
