import TailwindcssDropdown from '@/Components/Dropdowns/TailwindcssDropdown'
import { faCopy, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import TailwindcssCheckbox from '@/Components/Checkboxes/TailwindcssCheckbox'
import { LineSpacingType, TextEncodingType, TextWrapType, textEditorInitialOptions } from './utils/TextEditorSettings'
import { ExcelToTextContext } from './Contexts/ExcelToTextContext'

type Props = {
  handleCopy: () => void
  handleDownload: () => void
}

const TextEditorOptions = ({ handleCopy, handleDownload }: Props) => {
  const { settings, setSettings, foreignChars } = useContext(ExcelToTextContext)

  const handleTextWrapChange = () => setSettings((prevState) => ({ ...settings, textWrap: !prevState.textWrap as TextWrapType }))
  const handleLineSpacingSelect = (val: string) => setSettings({ ...settings, lineSpacing: val as LineSpacingType });
  const handleTextEncodingSelect = (val: string) => setSettings({ ...settings, textEncoding: val as TextEncodingType });

  return (
    <div className='flex flex-col justify-between gap-2 text-sm pr-3 w-full h-full col-span-2 border-r-2 border-r-base-200'>
      {/* Top options*/}
      <div className='flex flex-col gap-2'>
        {/* Text wrap checkbox */}
        <TailwindcssCheckbox
          defaultChecked={settings.textWrap}
          onChange={handleTextWrapChange}
          labelText='Wrap text'
          width={`100%`} />
        {/* Line spacing dropdown */}
        <TailwindcssDropdown
          label='Line spacing'
          items={textEditorInitialOptions.lineSpacing as string[]}
          selectedItem={settings.lineSpacing}
          onSelect={(selected) => handleLineSpacingSelect(selected)}
          width={'100%'}
        />
        {/* Text encoding dropdown */}
        <TailwindcssDropdown
          label='Encoding'
          items={textEditorInitialOptions.textEncoding as string[]}
          selectedItem={settings.textEncoding}
          onSelect={(selected) => handleTextEncodingSelect(selected)}
          width={'100%'}
        />
      </div>
      {/* Bottom options */}
      <div className='flex flex-col gap-2'>
        {/* Copy button */}
        <button className="btn btn-md" tabIndex={5} onClick={handleCopy}>
          <p className='pr-2'>Copy to clipboard</p>
          <FontAwesomeIcon icon={faCopy} className="h-5 w-5 text-gray-400"></FontAwesomeIcon>
        </button>
        {/* Save file button */}

        {/* Download button */}
        {Object.keys(foreignChars).length ?
          <button className="btn btn-md btn-disabled text-gray-300"
            disabled
          >
            Download not available due to foreign characters
          </button>
          :
          <button className="btn btn-md"
            tabIndex={6}
            onClick={!Object.keys(foreignChars).length ? handleDownload : () => { }}
          >
            <div className='pr-2'>Download .txt file</div>
            <FontAwesomeIcon icon={faDownload} className="h-5 w-5 text-gray-400"></FontAwesomeIcon>
          </button>
        }
      </div>
    </div>
  )
}

export default TextEditorOptions