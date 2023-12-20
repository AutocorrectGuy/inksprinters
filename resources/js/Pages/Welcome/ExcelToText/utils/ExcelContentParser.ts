import { custtomToastProps } from '@/Components/Toast/CustomToastContainer'
import { toast } from 'react-toastify'
import * as XLSX from 'xlsx'

export const parseExcelToTextArray = (files: File[], setExcelText: (value: string[] | null) => void) => {
  if (files.length > 1) {
    toast.error('You can use only one file at a time!', custtomToastProps)
    return
  }

  const file = files[0]
  const reader = new FileReader()
  reader.onload = (e: any) => {
    const workbook = XLSX.read(e.target.result, { type: 'binary' })
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const jsonData: { A: string }[] = XLSX.utils.sheet_to_json(worksheet, {
      skipHidden: true,
      blankrows: false,
      header: 'A',
    })
    const cellsData = jsonData.map((entry) => entry.A)
    setExcelText(cellsData)
  }
  reader.readAsBinaryString(file)
}
