import { useContext, useEffect, useRef } from 'react'
import { editor as editorType } from 'monaco-editor'
import TextEditorOptions from './TextEditorOptions'
import MonacoEditor from './MonacoEditor'
import { handleDownload } from './utils/OptionsHandlers/DownloadHandlers'
import { lineSpacingHandler } from './utils/OptionsHandlers/LineSpacingHandler'
import { handleCopy } from './utils/OptionsHandlers/CopyHandler'
import { ExcelToTextContext } from './Contexts/ExcelToTextContext'
import { extractColumn } from './utils/ExcelContentParser'
import { StepComponentProps } from './ExcelViewer/MultiStepModal'
import ForgeignCharTerminal from './ExcelViewer/ForgeignCharTerminal'

const StepEditAndExport = ({ handlePreviousStep }: StepComponentProps) => {
  const {
    cells,
    primaryEditorCells,
    setPrimaryEditorCells,
    primaryEditorTextValue,
    setPrimaryEditorTextValue,
    settings,
    selectedColumnIndexes
  } = useContext(ExcelToTextContext)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPrimaryEditorCells(extractColumn(cells, 0))
  }, [])

  useEffect(() => {
    setPrimaryEditorTextValue(() => lineSpacingHandler(settings, primaryEditorCells ?? extractColumn(cells, 0)))
  }, [settings.textWrap, settings.lineSpacing, settings.textEncoding])

  return (
    <div ref={containerRef} className="h-full flex flex-col">
      {/* Container for the columns */}
      <div className='flex flex-grow'> {/* Add overflow-auto if needed */}
        {/* 1st col */}
        <div className='w-64'>
          <TextEditorOptions
            handleCopy={() => handleCopy(primaryEditorTextValue as string)}
            handleDownload={() => handleDownload(primaryEditorTextValue as string, settings.textEncoding)}
          />
        </div>

        {/* 2nd col */}
        <div ref={containerRef} className='flex-grow flex flex-col'>
          <div className='flex-grow'>
            <MonacoEditor />
          </div>
          <ForgeignCharTerminal />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='flex justify-end pt-4'>
        <button className="btn btn-primary" onClick={handlePreviousStep}>Back</button>
      </div>
    </div>
  )
}

export default StepEditAndExport