import { toast } from 'react-toastify'
import * as XLSX from 'xlsx'
import { customToastProps } from '@/Components/Toast/CustomToastContainer'

const removeEmptyColumnsAndRows = (cells: string[][]) => {
  // Determine the number of columns
  const columnCount = cells[0]?.length || 0

  // Check if each column is empty
  const isColumnEmpty = Array(columnCount).fill(true)
  // Track if each row is empty
  const isRowEmpty = Array(cells.length).fill(true)

  cells.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell !== '') {
        isColumnEmpty[colIndex] = false
        isRowEmpty[rowIndex] = false
      }
    })
  })

  // Filter out the empty columns and rows
  return cells
    .filter((_, rowIndex) => !isRowEmpty[rowIndex])
    .map((row) => row.filter((_, colIndex) => !isColumnEmpty[colIndex]))
}

/**
 * Parses an Excel file to extract cell data and determine the column mode.
 *
 * @param files - A FileList containing the Excel files to be processed.
 * @param setCellsCallback - A callback function to update the cell data state.
 * @param setMultiColumnModeCallback - A callback function to update the Multi-column mode state.
 */

// TODO: modify to validate workbook not cells
export const readExcelFile = (
  files: File[],
  setCellsCallback: (cells: string[][]) => void,
  setWorkbook: (workbook: XLSX.WorkBook) => void,
  setWorksheetName: (worksheetName: string) => void,
) => {
  // Limit to only one file at a time
  if (files.length > 1) {
    toast.error('You can use only one file at a time!', customToastProps)
    return
  }

  const file = files[0]
  const reader = new FileReader()

  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (e.target?.result) {
      const workbook = XLSX.read(e.target.result, { type: 'binary' })

      setWorkbook(workbook)
      setWorksheetName(workbook.SheetNames[0])

      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]

      const cellsData: string[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: true, defval: '' })
      const sanitizedCellsData = removeEmptyColumnsAndRows(cellsData)

      // Check the number of columns in the sanitized data
      const columnsCount: number = sanitizedCellsData.length > 0 ? sanitizedCellsData[0].length : 0
      if (columnsCount === 0) {
        toast.error('The first sheet of the Excel file must contain at least one column of data', customToastProps)
      } else {
        setCellsCallback(sanitizedCellsData)
      }
    }
  }

  reader.onerror = () => {
    toast.error('Error reading the Excel file', customToastProps)
  }

  reader.readAsBinaryString(file)
}

/**
 * Extracts a column from a 2D array of strings.
 *
 * @param array2D The 2D array of strings representing the Excel data.
 * @param columnIndex The index of the column to extract.
 * @returns An array of strings representing the selected column.
 */
export const extractColumn = (array2D: string[][], columnIndex: number): string[] => {
  if (array2D.length === 0 || columnIndex < 0) {
    return []
  }

  return array2D.map((row) => {
    // Ensure the row has enough elements
    if (row.length > columnIndex) {
      return row[columnIndex]
    } else {
      // Return a default value (e.g., empty string) if the column index is out of bounds for this row
      return ''
    }
  })
}

export const convertSheetToCells = (workBook: XLSX.WorkBook, sheetName: string) =>
  removeEmptyColumnsAndRows(
    XLSX.utils.sheet_to_json(workBook.Sheets[sheetName], { header: 1, blankrows: true, defval: '' }),
  )
