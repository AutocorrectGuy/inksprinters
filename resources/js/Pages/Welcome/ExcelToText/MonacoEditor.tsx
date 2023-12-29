import { Editor, useMonaco } from '@monaco-editor/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { editor as editorType } from 'monaco-editor'
import { ExcelToTextContext } from './Contexts/ExcelToTextContext'
import { collectForeignCharacters } from './utils/Encoding/collectForeignCharacters'
import { extractColumn } from './utils/ExcelContentParser'
import ForgeignCharTerminal from './ExcelViewer/ForgeignCharTerminal'
import { lineSpacingHandler } from './utils/OptionsHandlers/LineSpacingHandler'

// Extracts unique values from object arrays
function getUniqueValuesFromObjectArrays<T>(data: Record<string, T[]>): T[] {
  let uniqueValues = new Set<T>()

  // Add each value to a Set to ensure uniqueness
  for (let values of Object.values(data))
    values.forEach(value => uniqueValues.add(value))

  return Array.from(uniqueValues)
}

const MonacoEditor = () => {
  const {
    cells,
    selectedColumnIndexes,
    primaryEditorTextValue,
    primaryEditorCells,
    setPrimaryEditorTextValue,
    setPrimaryEditorCells,
    setForeignChars,
    settings
  } = useContext(ExcelToTextContext)

  const [decorations, setDecorations] = useState<string[]>([])
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
  const [mounted, setMounted] = useState<boolean>(false)
  const editorRef = useRef<editorType.IStandaloneCodeEditor | null>(null)

  // Monaco Editor API access
  const monaco = useMonaco()

  // Load theme and set a flag when it's loaded
  useEffect(() => {
    if (monaco) {
      import('monaco-themes/themes/GitHub Dark.json')
        .then(data => {
          monaco.editor.defineTheme('github-dark', data as editorType.IStandaloneThemeData);
        })
        .then(() => {
          setIsThemeLoaded(true)
        });
    }
  }, [monaco]);

  useEffect(() => {
    updateDecorationsAndCollectChars(primaryEditorTextValue as string)
  }, [mounted, activeTabIndex])

  // Initialize editor on mount
  const onMount = (editor: editorType.IStandaloneCodeEditor) => {
    editorRef.current = editor
    setMounted(true)
  }

  // Creates decorations for text lines with non-Windows-1252 characters
  const createDecoration = (lineIndex: number) => ({
    options: { isWholeLine: true, className: 'bg-red-500' },
    range: new monaco!.Range(lineIndex + 1, 1, lineIndex + 1, 1)
  })


  // Updates decorations and collect non-Windows-1252 characters
  const updateDecorationsAndCollectChars = (newValue: string) => {
    if (!monaco || !editorRef.current) return;

    const currNonWindows1252Chars = collectForeignCharacters(newValue, settings.textEncoding);
    const currentDecorations = getUniqueValuesFromObjectArrays(currNonWindows1252Chars)
      .map((i) => createDecoration(i));

    setForeignChars(currNonWindows1252Chars);
    setDecorations(editorRef.current.deltaDecorations(decorations, currentDecorations));
  };

  // Handles editor text content changes
  const onChange = (val: string) => {
    setPrimaryEditorTextValue(val)
    updateDecorationsAndCollectChars(val)
  }

  const handleTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex)
    setPrimaryEditorCells(() => extractColumn(cells, tabIndex))
    setPrimaryEditorTextValue(() => lineSpacingHandler(settings, extractColumn(cells, tabIndex)))
  }

  return (
    <>
      {isThemeLoaded && primaryEditorCells && selectedColumnIndexes.length
        ? (
          <div className="flex flex-col h-full">
            <div role="tablist" className="tabs tabs-lifted">
              {selectedColumnIndexes.map((i) => (
                <div
                  key={`monaco-tab-index-${i}`}
                  role="tab"
                  className={`tab rounded-tr-[16px] font-bold ${i === activeTabIndex ? 'tab-active bg-purple-800 text-gray-300' : 'bg-base-300'}`}
                  onClick={() => handleTabClick(i)}
                >
                  Column Nº {i + 1}
                </div>
              ))}
            </div>
            <Editor
              value={primaryEditorTextValue as string}
              theme='github-dark'
              className='flex-grow'
              loading={''}
              width={'100%'}
              height={'100%'}
              options={{
                minimap: { enabled: false }
              }}
              onMount={onMount}
              onChange={(val) => onChange(val as string)}
            />
          </div>
        )
        : <div className='flex h-full items-center justify-center'>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }
    </>
  )
}

export default MonacoEditor
