import "./gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./app/navigation/applicationStack";
import { navigationRef } from "./app/navigation/navigation";
import { HistoryValidationListProvider } from "./app/context";
import { useApp } from "./app/main/app";

const App: React.FC = () => {
  const init = useApp();
  return <AppStack />;
};

const Application = () => (
  <HistoryValidationListProvider>
    <NavigationContainer ref={navigationRef}>
      <App />
    </NavigationContainer>
  </HistoryValidationListProvider>
);
export default Application;
