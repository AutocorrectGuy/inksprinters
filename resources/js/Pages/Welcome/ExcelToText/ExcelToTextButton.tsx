// ExcelToText component
import { useCallback, useEffect, useRef, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import TextEditorModal from './TextEditorModal'
import { parseExcelToTextArray } from './utils/ExcelContentParser'
import { ExcelToTextContext } from './Contexts/ExcelToTextContext'

const ExcelToTextButton = () => {
  const { excelText, setExcelText } = useContext(ExcelToTextContext);

  const modalRef = useRef<HTMLDialogElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { buttonRef.current && buttonRef.current.focus() }, [])
  useEffect(() => { excelText && modalRef.current?.showModal() }, [excelText])
  const onDrop = useCallback((files: File[]) => {
    parseExcelToTextArray(files, setExcelText)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
      {excelText
        ? <TextEditorModal modalRef={modalRef} />
        : <div {...getRootProps({ role: 'test' })} className="relative">
          <button className='btn btn-sm btn-outline rounded-md border-green-500 text-green-500 focus:ring-green-500 mb-20'>
            <input {...getInputProps()} />
            <p>{isDragActive ? 'Release to drop' : 'Excel to text'}</p>
          </button>
        </div>
      }
    </div>
  )
}

export default ExcelToTextButton
