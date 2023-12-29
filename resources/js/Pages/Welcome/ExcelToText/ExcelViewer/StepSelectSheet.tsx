import { useContext, useEffect } from 'react';
import { StepComponentProps } from './MultiStepModal'
import { ExcelToTextContext } from '../Contexts/ExcelToTextContext';
import * as XLSX from 'xlsx'
import { convertSheetToCells } from '../utils/ExcelContentParser';

const StepSelectSheet = ({ handleNextStep }: StepComponentProps) => {

  const { workBook, workSheetName, setWorkSheetName, setCells } = useContext(ExcelToTextContext)

  useEffect(() => {
    // select first sheet name
    setWorkSheetName(workSheetName ?? workBook!.SheetNames[0])
  }, [])

  const clickNext = () => {
    setCells(convertSheetToCells(workBook as XLSX.WorkBook, workSheetName as string))
    handleNextStep!()
  }

  return (
    <div className='h-full flex flex-col'>
      {/* Content section */}
      <div className={`flex-grow overflow-y-auto flex ${workBook!.SheetNames.length > 5 ? '' : 'items-center'}`}>
        <div className='flex flex-col w-full'>

          {workBook!.SheetNames.map((name, i) => (
            <button
              key={`worksheet-name-${i}`}
              onClick={() => setWorkSheetName(name)}
              className={`btn btn-lg m-4 my-2 ${name === workSheetName ? 'btn-primary' : ''}`}>
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation buttons at the bottom */}
      <div className='flex justify-end'>
        {/* <button className="btn btn-primary mr-2" onClick={handlePreviousStep}>Back</button> */}
        <button className="btn btn-primary"
          onClick={() => clickNext()}>
          Next
        </button>
      </div>
    </div>
  );
}


export default StepSelectSheet