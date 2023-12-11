import Dropdown from '@/Components/Dropdown'
import TailwindcssDropdown from '@/Components/Dropdowns/TailwindcssDropdown'
import { faChevronDown, faCopy, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { textEditorInitialOptions } from './TextEditorModal'
import TailwindcssCheckbox from '@/Components/Checkboxes/TailwindcssCheckbox'

export type TextWrapType = boolean
export type LineSpacingType = 'none' | 'single'
export type TextEncodingType = 'UTF-8'

export type SettingsType = {
  textWrap: TextWrapType
  lineSpacing: LineSpacingType
  textEncoding: TextEncodingType
}

type Props = {
  settings: SettingsType
  setSettings: React.Dispatch<React.SetStateAction<SettingsType>>
  handleCopy: () => void
  handleDownload: () => void
}

const TextEditorOptions = ({ settings, setSettings, handleCopy, handleDownload }: Props) => {

  const handleTextWrapChange = () => setSettings((prevState) => ({ ...settings, textWrap: !prevState.textWrap as TextWrapType }))
  const handleLineSpacingSelect = (val: string) => setSettings({ ...settings, lineSpacing: val as LineSpacingType });
  const handleTextEncodingSelect = (val: string) => setSettings({ ...settings, textEncoding: val as TextEncodingType });

  return (
    <div className='flex flex-col justify-between gap-2 text-sm pr-3 max-w-[240px] w-full col-span-2 border-r-2 border-r-base-200'>

      <div className='flex flex-col gap-2'>
        <TailwindcssCheckbox defaultChecked={settings.textWrap} onChange={handleTextWrapChange} labelText='Wrap text' width={`100%`} />
        <TailwindcssDropdown
          label='Line spacing'
          items={textEditorInitialOptions.lineSpacing as string[]}
          selectedItem={settings.lineSpacing}
          onSelect={(selected) => handleLineSpacingSelect(selected)}
          width={'100%'}
        />
        <TailwindcssDropdown
          label='Text encoding'
          items={textEditorInitialOptions.textEncoding as string[]}
          selectedItem={settings.textEncoding}
          onSelect={(selected) => handleTextEncodingSelect(selected)}
          width={'100%'}
        />
      </div>

      <div className='flex flex-col gap-2'>
        {/* Copy button */}
        <button className="btn btn-md" tabIndex={5} onClick={handleCopy}>
          <p className='pr-2'>Copy to clipboard</p>
          <FontAwesomeIcon icon={faCopy} className="h-5 w-5 text-gray-400"></FontAwesomeIcon>
        </button>

        {/* Save file button */}
        <button className="btn btn-md" tabIndex={6} onClick={handleDownload}>
          <div className='pr-2'>Download .txt file</div>
          <FontAwesomeIcon icon={faDownload} className="h-5 w-5 text-gray-400"></FontAwesomeIcon>
        </button>

      </div>
    </div>
  )
}

export default TextEditorOptions