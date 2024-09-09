import { useEffect } from "react";
import { useAppState } from "./globalStateManagement";

export const useApp = () => {
  const [{ loadState }] = useAppState();

  const initializeApp = async () => {
    console.log("Initialize application...");
    try {
      await loadState();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initializeApp();
  }, []);
};
