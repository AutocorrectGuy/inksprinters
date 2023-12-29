// ExcelToTextButton component is responsible for handling the upload of Excel files,
// parsing them, and conditionally rendering the appropriate UI based on the state of the uploaded data.

import { useCallback, useEffect, useRef, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { readExcelFile } from './utils/ExcelContentParser';
import { ExcelToTextContext } from './Contexts/ExcelToTextContext';
import MultiStepModal from './ExcelViewer/MultiStepModal';

const ExcelToTextButton = () => {
  // Context for managing Excel data and two-column mode state
  const { cells, setCells, setWorkBook, setWorkSheetName } = useContext(ExcelToTextContext);
  const dialogRef = useRef<HTMLDialogElement>(null)
  // Refs for handling focus and modal dialog interactions
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Autofocus on the button when the component is mounted
  useEffect(() => { buttonRef.current && buttonRef.current.focus() }, []);

  // Automatically open the modal dialog when there are cells and multiColumnMode is false
  useEffect(() => { dialogRef.current?.showModal() }, [cells]);

  // Callback for handling file drops
  const onDrop = useCallback((files: File[]) => {
    readExcelFile(files as File[], setCells, setWorkBook, setWorkSheetName);
  }, []);

  // Dropzone hook for drag-and-drop file upload functionality
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div> {
      // Excel file with valid data provided
      cells.length
        ? (<MultiStepModal dialogRef={dialogRef} />)
        // Dnd button that allows user to provide an excel file to this editor
        : <div {...getRootProps({ role: 'test' })} className="relative">
          <button className='btn btn-sm btn-outline rounded-md border-green-500 text-green-500 focus:ring-green-500 mb-20'>
            <input {...getInputProps()} />
            <p>{isDragActive ? 'Release to drop' : 'Excel to text'}</p>
          </button>
        </div>
    }</div>
  );
};

export default ExcelToTextButton;
