import React, { useState, useCallback, useEffect, useRef, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as XLSX from 'xlsx';
import { faCopy, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons';

type JsonCell = { A: string };

const FileUpload = memo<{ onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void }>(({ onFileUpload }) => {

  return (
    <div className='w-full flex items-center justify-center h-60'>
      <input
        type="file"
        accept=".xlsx"
        onChange={onFileUpload}
        className="absolute w-1 h-1 opacity-0 overflow-hidden focus:outline-none"
        id='file-upload-btn'
        tabIndex={0}
        aria-labelledby="file-upload-label"
      />
      <label htmlFor="file-upload-btn" className="btn btn-primary btn-lg cursor-pointer" id="file-upload-label">
        Import Excel File
      </label>
    </div>
  );
});

const TextEditorWithSpacingControl = ({ originalData }: { originalData: string[] | undefined }) => {
  const [inputText, setInputText] = useState<string>('');
  const [lineSpacing, setLineSpacing] = useState<number>(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (originalData && textareaRef.current) {
      textareaRef.current.focus();
      setInputText(() => {
        return lineSpacing === 0
          ? originalData.map((cell) => cell.replace(/\n/g, ' ')).join('\n'.repeat(lineSpacing + 1))
          : originalData.join('\n'.repeat(lineSpacing));
      });
    }
  }, [originalData, lineSpacing]);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText).then(() => { }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleDownload = () => {
    const blob = new Blob([inputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'exported-text.txt'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up the URL
  };

  return (
    <div className="h-full">
      <div className="flex w-full items-center justify-center gap-2 pb-4">
        <div className='text-gray-400'>Line Spacing:</div>
        <div className="join">
          {[...Array(3)].map((_, i) => (
            <button
              key={`line-spacing-btn-${i}`}
              tabIndex={2 + i}
              type="button"
              className={`btn btn-md join-item ${lineSpacing === i ? 'bg-base-300' : 'bg-base-200 text-gray-400'}`}
              onClick={() => setLineSpacing(i)}
            >
              {i - 1}
            </button>
          ))}
        </div>
        <button className="btn btn-md" tabIndex={5} onClick={handleCopy}>
          <FontAwesomeIcon icon={faCopy} className="h-6 w-6 text-gray-400"></FontAwesomeIcon>
        </button>
        <button className="btn btn-md" tabIndex={6} onClick={handleDownload}>
          <FontAwesomeIcon icon={faDownload} className="h-6 w-6 text-gray-400"></FontAwesomeIcon>
        </button>
      </div>
      <textarea
        tabIndex={1}
        ref={textareaRef}
        className="h-[calc(100%-96px)] textarea w-full border-transparent focus:border-transparent focus:ring-0 leading-5 bg-base-200 py-4"
        value={inputText}
        rows={20}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

const ExcelToText = () => {
  const [originalData, setOriginalData] = useState<string[]>();
  const excelToTextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (excelToTextButtonRef.current) {
      excelToTextButtonRef.current.focus();
    }
  }, []);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: JsonCell[] = XLSX.utils.sheet_to_json(worksheet, {
        skipHidden: true,
        blankrows: false,
        header: 'A',
      });
      const cellsData = jsonData.map((entry) => entry.A);
      setOriginalData(cellsData);
    };
    reader.readAsBinaryString(file);
  }, []);

  return (
    <>
      <button
        ref={excelToTextButtonRef}
        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-green-500 bg-gray-500 bg-opacity-25 px-2 py-1 rounded-md hover:bg-green-500 hover:bg-opacity-75"
        onClick={() => {
          const modal = document.getElementById('excel-to-text-modal') as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}>
        Excel to text
      </button>

      <dialog id="excel-to-text-modal" className="modal">
        <div className="modal-box text-left max-w-4xl overflow-hidden">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 mt-3 top-1" tabIndex={7}><FontAwesomeIcon icon={faXmark} className='w-6 h-6' /></button>
          </form>
          {originalData ? <TextEditorWithSpacingControl originalData={originalData} /> : <FileUpload onFileUpload={handleFileUpload} />}
        </div>
        <form method="dialog" className="modal-backdrop bg-black bg-opacity-80">
          <button tabIndex={-1}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ExcelToText;
