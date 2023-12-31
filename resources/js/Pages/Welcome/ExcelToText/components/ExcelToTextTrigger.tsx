import { useEffect, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { useExcelToTextContext } from '../contexts/ExcelToTextContext'
import MultiStepModal from './MultiStep/MultiStepModal'
import { readExcelFile } from '../utils/ExcelDataProcessing/readAndSanitize'

const ExcelToTextButton = () => {
  const {
    setSheetName,
    setSheetData,
    workBook,
    setWorkBook,
    setCurrentStep,
    setColumnValues,
    setEditorText,
    appSettings,
  } = useExcelToTextContext()

  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => dialogRef.current?.showModal(), [workBook])

  // Dropzone props
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files: File[]) =>
      readExcelFile({
        files: files as File[],
        setSheetName,
        setSheetData,
        setWorkBook,
        setCurrentStep,
        setColumnValues,
        setEditorText,
        appSettings,
      }),
  })

  return (
    <>
      {workBook ? (
        <MultiStepModal dialogRef={dialogRef} />
      ) : (
        // Dnd button that allows user to provide an excel file to this editor
        <div {...getRootProps({ role: 'test' })} className="relative">
          <button className="btn btn-outline btn-sm mb-20 rounded-md border-green-500 text-green-500 focus:ring-green-500">
            <input {...getInputProps()} />
            <p>{isDragActive ? 'Release to drop' : 'Excel to text'}</p>
          </button>
        </div>
      )}
    </>
  )
}

export default ExcelToTextButton
