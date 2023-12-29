import React, { MouseEvent } from 'react'

/**
 * Handles the selection of columns in a table-like structure.
 *
 * @param i The index of the column being selected, or 'string' to select all.
 * @param event The mouse event associated with the selection.
 * @param setSelectedColumns The state setter function for selected columns.
 */
export const pickColumn = (
  columnIndex: number | string,
  event: MouseEvent,
  setSelectedColumns: React.Dispatch<React.SetStateAction<boolean[]>>,
) => {
  if (typeof columnIndex === 'string') {
    // Handle special cases where columnIndex is a string
    // For example, selecting all columns, etc.
    // This part depends on how you want to handle string inputs.
    setSelectedColumns((prev) => prev.map(() => true)) // Example: Select all
    return
  }

  setSelectedColumns((prev) => {
    const newSelections = [...prev]

    if (event.ctrlKey || event.metaKey) {
      // Toggle the selection status of the clicked column
      newSelections[columnIndex] = !newSelections[columnIndex]
    } else {
      // Without Ctrl/Cmd key, select only the clicked column
      newSelections.fill(false) // Deselect all
      newSelections[columnIndex] = true // Select the clicked one
    }

    return newSelections
  })
}
