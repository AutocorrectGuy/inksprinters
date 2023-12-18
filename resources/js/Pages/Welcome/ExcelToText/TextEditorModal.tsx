import CustomToastContainer, { custtomToastProps } from '@/Components/Toast/CustomToastContainer'
import { faCopy, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import TextEditorOptions, { LineSpacingType, SettingsType, TextEncodingType } from './TextEditorOptions'
import MonacoEditor from './MonacoEditor'

const initialSettings: SettingsType = {
  textWrap: false,  // Checkbox state
  lineSpacing: 'none',    // Toggle between 'none' and 'single'
  textEncoding: 'UTF-8'   // Default encoding type
};

export const textEditorInitialOptions: {
  textWrap: boolean,
  lineSpacing: LineSpacingType[],
  textEncoding: TextEncodingType[],
} = {
  textWrap: false,
  lineSpacing: ['none', 'single'],
  textEncoding: ['UTF-8']
}

const loadSettings = () => {
  const saved = localStorage.getItem('excel-to-text-settings');
  return saved ? JSON.parse(saved) : initialSettings;
};

type Props = {
  text: string[] | undefined
  setText: React.Dispatch<React.SetStateAction<string[] | null>>
  modalRef: React.RefObject<HTMLDialogElement>
}

const TextEditorModal = ({ modalRef, text, setText }: Props) => {
  const [inputText, setInputText] = useState<string>('') // Inputfield text value
  const [settings, setSettings] = useState<SettingsType>(loadSettings());


  useEffect(() => {
    if (text) {
      setInputText(() => {
        const lineSpacing = settings.lineSpacing === 'none' ? 1 : 2

        return settings.textWrap
          ? text.map((cell) => cell.replace(/[\r\n]+/g, ' ')).join('\n'.repeat(lineSpacing))
          : text.join('\n'.repeat(lineSpacing))
      })
    }
  }, [text, settings])

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText)
      .then(() => toast.success('Text copied to clipboard!'))
      .catch(err => toast.error(`Failed to copy text: \n${err}`, custtomToastProps))
  }

  const handleDownload = () => {
    const blob = new Blob([inputText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'exported-text.txt' // Name of the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url) // Clean up the URL
    toast.success('File downloaded successfully!', custtomToastProps)
  }

  const closeModal = () => {
    setText(() => {
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
            <div className='col-span-2 text-center flex items-center justify-center font-bold pb-4'>Text options</div>

            {/* Top right (NavTop) */}
            <div className='col-span-5 text-center flex items-center justify-center font-bold pb-4'>Text preview</div>

            {/* Bottom left (Settings Panel) */}
            <TextEditorOptions settings={settings} setSettings={setSettings} handleCopy={handleCopy} handleDownload={handleDownload} />

            {/* Bottom right (Text editor) */}
            <div className='flex flex-col grow pl-4 col-span-5 h-hull'>

              {/* Textarea with modified text */}
              <MonacoEditor inputText={inputText} setInputText={setInputText} />
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