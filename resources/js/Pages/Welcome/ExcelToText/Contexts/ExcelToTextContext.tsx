import React, { createContext, useEffect, useState } from "react";
import { SettingsType, loadSettings } from "../utils/TextEditorSettings";

// Define the context type
interface MyContextType {
  excelText: string[] | null;
  setExcelText: React.Dispatch<React.SetStateAction<string[] | null>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  foreignChars: { [key: string]: number[] };
  setForeignChars: React.Dispatch<React.SetStateAction<{ [key: string]: number[] }>>;
  settings: SettingsType;
  setSettings: React.Dispatch<React.SetStateAction<SettingsType>>;
}

// Define the initial context value
const contextInitialValue: MyContextType = {
  excelText: null,
  setExcelText: () => { },
  inputText: '',
  setInputText: () => { },
  foreignChars: {},
  setForeignChars: () => { },
  settings: loadSettings(),
  setSettings: () => { }
};

// Create the context
export const ExcelToTextContext = createContext(contextInitialValue);

// Define the props for MyContextProvider
interface MyContextProviderProps {
  children: React.ReactNode;
}

// Create a provider component
export const ExcelToTextContextProvider = ({ children }: MyContextProviderProps) => {
  const [excelText, setExcelText] = useState<string[] | null>(contextInitialValue.excelText);
  const [inputText, setInputText] = useState<string>(contextInitialValue.inputText);
  const [foreignChars, setForeignChars] = useState<{ [key: string]: number[] }>({})
  const [settings, setSettings] = useState<SettingsType>(contextInitialValue.settings);

  return (
    <ExcelToTextContext.Provider
      value={{
        excelText,
        setExcelText,
        inputText,
        setInputText,
        foreignChars,
        setForeignChars,
        settings,
        setSettings
      }}>
      {children}
    </ExcelToTextContext.Provider>
  );
};
