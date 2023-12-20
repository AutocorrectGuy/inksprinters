import CustomToastContainer from '@/Components/Toast/CustomToastContainer'
import React, { useContext, useEffect, useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextEditorOptions from './TextEditorOptions'
import MonacoEditor from './MonacoEditor'
import { SettingsType, loadSettings } from './utils/TextEditorSettings'
import { handleDownload } from './utils/OptionsHandlers/DownloadHandlers'
import { lineSpacingHandler } from './utils/OptionsHandlers/LineSpacingHandler'
import { handleCopy } from './utils/OptionsHandlers/CopyHandler'
import { ExcelToTextContext } from './Contexts/ExcelToTextContext'

type Props = {
  modalRef: React.RefObject<HTMLDialogElement>
}

const TextEditorModal = ({ modalRef }: Props) => {
  const { excelText, setExcelText, inputText, setInputText, settings } = useContext(ExcelToTextContext)

  useEffect(() => {
    if (excelText)
      setInputText(() => {
        return lineSpacingHandler(settings, excelText)
      })
  }, [excelText, settings.textWrap, settings.lineSpacing])

  const closeModal = () => {
    setExcelText(() => {
      modalRef.current!.close()
      return null
    })
  }

  return (
    <>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box text-left max-w-4xl overflow-hidden">
          {/* Close button - x */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 mt-4 top-1" tabIndex={7} onClick={() => closeModal()}>
              <FontAwesomeIcon icon={faXmark} className='w-8 h-8' />
            </button>
          </form>
          {/* Modal */}
          <div className="h-full grid grid-cols-7">
            {/* Top left (Settings Label) */}
            <div className='col-span-2 text-center flex items-center justify-center font-bold pb-4'>
              Text options
            </div>
            {/* Top right (NavTop) */}
            <div className='col-span-5 text-center flex items-center justify-center font-bold pb-4'>
              Text preview
            </div>
            {/* Bottom left (Settings Panel) */}
            <TextEditorOptions
              handleCopy={() => handleCopy(inputText)}
              handleDownload={() => handleDownload(inputText, settings.textEncoding)}
            />
            {/* Bottom right (Text editor) */}
            <div className='flex flex-col grow pl-4 col-span-5 h-hull'>
              {/* Textarea with modified text */}
              <MonacoEditor />
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop bg-black bg-opacity-80 min-h-screen" onClick={() => closeModal()}>
          <button tabIndex={-1}>close</button>
        </form>
        <CustomToastContainer />
      </dialog>
    </>
  )
}

export default TextEditorModal