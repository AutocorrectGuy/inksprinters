import 'react-tooltip/dist/react-tooltip.css'
import { useContext, useRef, useState } from 'react'
import { ExcelToTextContext } from '../Contexts/ExcelToTextContext'
import { Tooltip } from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { pickColumn } from './Utils/ColumnPicker'
import TableHeaderCell from './TableHeaderCell'
import { StepComponentProps } from './MultiStepModal'
import { lineSpacingHandler } from '../utils/OptionsHandlers/LineSpacingHandler'
import { extractColumn } from '../utils/ExcelContentParser'


const StepChooseColumn = ({ handlePreviousStep, handleNextStep }: StepComponentProps) => {
  const { cells, setSelectedColumnIndexes, setPrimaryEditorTextValue, settings, primaryEditorCells, setPrimaryEditorCells } = useContext(ExcelToTextContext);

  const [selectedColumns, setSelectedColumns,] = useState<boolean[]>(cells[0].map((_x, i) => !i));

  const tableRef = useRef<HTMLTableElement>(null)

  const selectColumn = (columnIndex: number) => selectedColumns[columnIndex];

  const clickNext = () => {

    // store selected column indexes
    setSelectedColumnIndexes(() => {
      const selectedIndexes = selectedColumns
        .map((isSelected, index) => isSelected ? index : -1)
        .filter(index => index !== -1)

      // store first column cells data as string[]
      setPrimaryEditorCells(() => {
        const textValue = extractColumn(cells, selectedIndexes[0])

        // convert and store cells string[] as plain string
        setPrimaryEditorTextValue(() => lineSpacingHandler(settings, textValue))
        
        return textValue
      })

      return selectedIndexes
    });

    handleNextStep!()
  }

  const selectedColumnCount = selectedColumns.reduce((acc, curr) => +curr + acc, 0)
  return (

    <div className='h-full flex flex-col'>
      <div className="py-4 text-left flex justify-center items-center">
        <p className="mr-2">
          {`Excel file contains ${cells[0].length} columns. Please pick the column you want to use.`}
        </p>
        <span data-tooltip-id="tooltip-excel-viewer-1">
          <FontAwesomeIcon icon={faInfoCircle} className='w-6 h-6 text-gray-500 hover:text-gray-200 cursor-pointer' />
        </span>
        <Tooltip id="tooltip-excel-viewer-1"
          clickable
          opacity={'100%'}
          place='bottom'
          classNameArrow='border border-gray-600'
          delayHide={200}
          className='z-30 border border-gray-600 max-w-[350px] text-white'
          style={{ backgroundColor: '#1D232A' }}
        >
          <div className="text-left pb-4">
            <p className="mr-1 float-left">Tip: You can select multiple columns at once by clicking and holding&nbsp;
              <kbd className="kbd kbd-sm border border-info">⌘</kbd>
              &nbsp;/&nbsp;
              <kbd className="kbd kbd-sm border border-info">Ctrl</kbd>
              &nbsp;key or by clicking&nbsp;
              <button
                className="btn btn-primary btn-xs inline-block"
                onClick={(e) => pickColumn('both', e, setSelectedColumns)}>
                here
              </button>
            </p>
          </div>
        </Tooltip>
      </div>

      <div className='flex-grow overflow-auto'>
        <table ref={tableRef} className='table table-xs table-fixed table-pin-rows table-pin-cols w-fit mx-auto rounded-none overflow-hidden'>
          <thead>
            <tr>
              <td className='w-10 select-none'></td>
              {cells[0].map((_x, i) => <TableHeaderCell
                key={`table-header-cell-${i}`}
                isSelected={selectColumn(i)}
                columnIndex={i + 1}
                setSelectedColumns={setSelectedColumns}
              />)}
            </tr>
          </thead>
          <tbody >
            {cells.map((row, i) => (  // for each row
              <tr key={`row-${i}`}>
                <td className={`w-10 select-none text-right text-gray-500`}>
                  {i + 1}
                </td>
                {row.map((cell, j) => ( // for each cell
                  <td
                    onClick={(e) => pickColumn(j, e, setSelectedColumns)}
                    className='border border-gray-600 cursor-pointer bg-transparent select-none relative'
                    key={`cell-${i}-${j}`}>
                    {cell}
                    {/* Backdrop */}
                    {!i && selectColumn(j) && <div className={`absolute bg-gray-700 left-0 w-40 top-0 -z-10 bg-opacity-50 overflow-hidden`}
                      style={{
                        height: tableRef.current ? tableRef.current.scrollHeight * 2 : 9999
                      }} />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center pb-4 pt-8'>
        <p className='text-xl rounded-md flex items-center text-white'>
          {selectedColumnCount > 0 ? (
            <>
              <span className='float-left'>Selected&nbsp;</span>
              <span className='float-left bg-gray-700 rounded-md px-2 text-2xl'>{selectedColumnCount}</span>
              <span className='float-left'>&nbsp;column{(selectedColumnCount > 1 || selectedColumnCount === 0) ? 's' : ''}</span>
            </>
          ) : (
            'No columns selected'
          )}
        </p>
      </div>
      {/* Navigation buttons */}
      <div className='flex justify-end'>
        <button className="btn btn-primary mr-2" onClick={handlePreviousStep}>Back</button>
        <button className="btn btn-primary" onClick={() => clickNext()}>Next</button>
      </div>
    </div>
  )
}

export default StepChooseColumn