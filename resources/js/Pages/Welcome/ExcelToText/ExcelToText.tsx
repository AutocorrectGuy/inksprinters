import React, { useState, useCallback, useEffect, useRef } from 'react'
import * as XLSX from 'xlsx'
import { useDropzone } from 'react-dropzone'
import TextEditorModal from './TextEditorModal'
import { toast } from 'react-toastify'
import { custtomToastProps } from '@/Components/Toast/CustomToastContainer'

const ExcelToText = () => {
  const [text, setText] = useState<string[] | null>(null)
  const modalRef = useRef<HTMLDialogElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    buttonRef.current && buttonRef.current.focus()
  }, [])

  useEffect(() => {
    text && modalRef.current?.showModal()
  }, [text])

  const onDrop = useCallback((files: File[]) => {
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
      setText(cellsData)
    }
    reader.readAsBinaryString(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      {text
        ? <TextEditorModal text={text} setText={setText} modalRef={modalRef} />
        : <div {...getRootProps({ role: 'test' })} className="relative">
          <button className='btn btn-sm btn-outline rounded-md border-green-500 text-green-500 focus:ring-green-500 mb-20'>
            <input {...getInputProps()} />
            <p>{isDragActive ? 'Release to drop' : 'Excel to text'}</p>
          </button>
        </div>
      }
    </>
  )
}

export default ExcelToText
