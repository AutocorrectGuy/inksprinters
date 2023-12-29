import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
import { SettingsType, loadSettings } from "../utils/TextEditorSettings"
import * as XLSX from 'xlsx'

// MyContextType defines the structure of the context used for managing state
// in the 'excel-to-text' application. It includes states and setters for handling
// Excel data, editor contents, foreign characters, and application settings.

type MyContextType = {
  // Holds the structured data imported from an Excel file as a two-dimensional
  // array of strings. Each inner array represents a row from the Excel file.
  cells: string[][]
  setCells: Dispatch<SetStateAction<string[][]>>

  // Indexes of selected coulmns that are selected by user
  selectedColumnIndexes: number[]
  setSelectedColumnIndexes: Dispatch<SetStateAction<number[]>>

  // Imported file as XLSX object
  workBook: XLSX.WorkBook | null
  setWorkBook: Dispatch<SetStateAction<XLSX.WorkBook | null>>

  workSheetName: string | null
  setWorkSheetName: Dispatch<SetStateAction<string | null>>

  // An array of strings representing the cell values from the
  // Excel file intended for the primary text editor. It can be null if no data is assigned.
  primaryEditorCells: string[] | null
  setPrimaryEditorCells: Dispatch<SetStateAction<string[] | null>>

  // A string representing the current text content of the
  // primary text editor. It can be null if the editor is empty.
  primaryEditorTextValue: string | null
  setPrimaryEditorTextValue: Dispatch<SetStateAction<string | null>>

  // A mapping of foreign characters found in the text editor content.
  // Each key is a character, and the value is an array of numbers representing the
  // positions of the character in the text.
  foreignChars: { [key: string]: number[] }
  setForeignChars: Dispatch<SetStateAction<{ [key: string]: number[] }>>

  // An object representing the main settings of the 'excel-to-text' application.
  // These settings are intended to be stored in local storage (as indicated by the TODO comment).
  settings: SettingsType
  setSettings: Dispatch<SetStateAction<SettingsType>>

  resetContext: () => void
}

// Define the initial context value based on MyContextType
const contextInitialValue: MyContextType = {
  // Initial empty array for Excel cell data
  cells: [],
  setCells: () => { },

  // Initial for selected column indexes
  selectedColumnIndexes: [],
  setSelectedColumnIndexes: () => { },

  // Initial state of the XLSX workBook
  workBook: null,
  setWorkBook: () => { },

  workSheetName: null,
  setWorkSheetName: () => { },

  // Initial state for primary editor cells
  primaryEditorCells: null,
  setPrimaryEditorCells: () => { },

  // Initial state for primary editor text
  primaryEditorTextValue: null,
  setPrimaryEditorTextValue: () => { },

  // Initial empty object for foreign characters mapping
  foreignChars: {},
  setForeignChars: () => { },

  // Load initial settings, potentially from local storage
  settings: loadSettings(),
  setSettings: () => { },

  resetContext: () => { }
}

// Create the context
export const ExcelToTextContext = createContext(contextInitialValue)

// Create a provider component
export const ExcelToTextContextProvider = ({ children }: { children: ReactNode }) => {
  const [cells, setCells] = useState<string[][]>(contextInitialValue.cells)
  const [selectedColumnIndexes, setSelectedColumnIndexes] = useState<number[]>(contextInitialValue.selectedColumnIndexes)
  const [workBook, setWorkBook] = useState<XLSX.WorkBook | null>(contextInitialValue.workBook)
  const [workSheetName, setWorkSheetName] = useState<string | null>(contextInitialValue.workSheetName)
  const [primaryEditorCells, setPrimaryEditorCells] = useState<string[] | null>(contextInitialValue.primaryEditorCells)
  const [primaryEditorTextValue, setPrimaryEditorTextValue] = useState<string | null>(contextInitialValue.primaryEditorTextValue)
  const [foreignChars, setForeignChars] = useState<{ [key: string]: number[] }>(contextInitialValue.foreignChars)
  const [settings, setSettings] = useState<SettingsType>(contextInitialValue.settings)

  const resetContext = () => {
    setCells(contextInitialValue.cells);
    setSelectedColumnIndexes(contextInitialValue.selectedColumnIndexes);
    setWorkBook(contextInitialValue.workBook);
    setWorkSheetName(contextInitialValue.workSheetName);
    setPrimaryEditorCells(contextInitialValue.primaryEditorCells);
    setPrimaryEditorTextValue(contextInitialValue.primaryEditorTextValue);
    setForeignChars(contextInitialValue.foreignChars);
    setSettings(contextInitialValue.settings);
  };

  return (
    <ExcelToTextContext.Provider
      value={{
        cells,
        setCells,
        selectedColumnIndexes,
        setSelectedColumnIndexes,
        workBook,
        setWorkBook,
        workSheetName,
        setWorkSheetName,
        primaryEditorCells,
        setPrimaryEditorCells,
        primaryEditorTextValue,
        setPrimaryEditorTextValue,
        foreignChars,
        setForeignChars,
        settings,
        setSettings,
        resetContext
      }}>
      {children}
    </ExcelToTextContext.Provider>
  )
}