import React, { Dispatch, SetStateAction, useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
// import { UserProfile } from "../types/generalTypes";

type HistoryValidationListContextType = {
  ibanSavedList: IbanListType;
  setIbanSavedList: Dispatch<SetStateAction<IbanListType>>;
};

export type IbanListType = { id: number; iban: string }[];

export const HistoryValidationListContext: React.Context<HistoryValidationListContextType> =
  createContext<HistoryValidationListContextType>({
    ibanSavedList: [],
    setIbanSavedList: () => {},
  });

export const HistoryValidationListProvider: React.FC<any> = ({
  children,
}: any) => {
  const [ibanSavedList, setIbanSavedList] = useState<IbanListType>();

  return (
    <HistoryValidationListContext.Provider
      value={{
        ibanSavedList,
        setIbanSavedList,
      }}
    >
      {children}
    </HistoryValidationListContext.Provider>
  );
};

export const useHistoryValidationContext = () =>
  useContext(HistoryValidationListContext);
