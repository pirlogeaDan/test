import { useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useHistoryValidationContext } from "../context";

export const useAppState = () => {
  const initialized: any = useRef();
  const { ibanSavedList, setIbanSavedList } = useHistoryValidationContext();
  useEffect(() => {
    try {
      if (initialized.current) {
        if (ibanSavedList) {
          AsyncStorage.setItem("ibanSavedList", JSON.stringify(ibanSavedList));
        }
      }
    } catch (error) {
      __DEV__ && console.log("Store identity error", error);
    }
  }, [ibanSavedList]);

  const loadState = async () => {
    let user = null;

    try {
      const ibanSavedListFromStorage = await AsyncStorage.getItem(
        "ibanSavedList"
      );
      setIbanSavedList(
        !!ibanSavedListFromStorage ? JSON.parse(ibanSavedListFromStorage) : 0
      );

      initialized.current = true;
      return [user];
    } catch (e) {
      __DEV__ && console.log("Failed ", e);
      return [];
    }
  };

  return [{ loadState }];
};
