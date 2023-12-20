import { Editor, useMonaco } from '@monaco-editor/react'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { editor as editorType } from 'monaco-editor'
import { ExcelToTextContext } from './Contexts/ExcelToTextContext'
import { collectForeignCharacters } from './utils/Encoding/collectForeignCharacters'

// Extracts unique values from object arrays
function getUniqueValuesFromObjectArrays<T>(data: Record<string, T[]>): T[] {
  let uniqueValues = new Set<T>()

  // Add each value to a Set to ensure uniqueness
  for (let values of Object.values(data))
    values.forEach(value => uniqueValues.add(value))

  return Array.from(uniqueValues)
}

// Main App component
const MonacoEditor = () => {
  const { inputText, setInputText, foreignChars, setForeignChars, settings: { textEncoding } } = useContext(ExcelToTextContext)
  const [decorations, setDecorations] = useState<string[]>([])
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Ref to the Monaco editor instance
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
        .then(() => setIsThemeLoaded(true));
    }
  }, [monaco]);

  // Initialize editor on mount
  const onMount = useCallback((editor: editorType.IStandaloneCodeEditor) => {
    editorRef.current = editor

  }, [])

  // Creates decorations for text lines with non-Windows-1252 characters
  const createDecoration = (lineIndex: number) => ({
    options: { isWholeLine: true, className: 'bg-red-500' },
    range: new monaco!.Range(lineIndex + 1, 1, lineIndex + 1, 1)
  })

  // Updates decorations and collect non-Windows-1252 characters
  const updateDecorationsAndCollectChars = useCallback(() => {
    if (!monaco || !editorRef.current) return

    const currNonWindows1252Chars = collectForeignCharacters(inputText, textEncoding)
    const currentDecorations = getUniqueValuesFromObjectArrays(currNonWindows1252Chars)
      .map((i) => (createDecoration(i)))

    setForeignChars(currNonWindows1252Chars)
    setDecorations(editorRef.current.deltaDecorations(decorations, currentDecorations))
  }, [inputText, textEncoding])

  // Updates decorations whenever the input value changes
  useEffect(() => {
    updateDecorationsAndCollectChars()
  }, [updateDecorationsAndCollectChars])

  // Handles editor text content changes
  const onChange = useCallback((val: string) => {
    setInputText(val)
  }, [])

  return (
    <>
      {isThemeLoaded && (
        <div>
          <Editor
            value={inputText}
            className='h-full w-full'
            height={window.innerHeight - 300}
            theme='github-dark'
            options={{
              minimap: { enabled: false }
            }}
            onMount={onMount}
            onChange={(val) => onChange(val as string)}
          />
          <div className='py-2 bg-base-200 px-5 h-32 overflow-y-scroll'>
            <div>Illegal characters (for {textEncoding} encoding): </div>
            <div>
              {Object.keys(foreignChars).length > 0
                ? Object.keys(foreignChars).map((char, index) => (
                  <div key={`illegal-character-${index}`}>
                    <span className='text-yellow-400'>{char}</span> on line
                    {foreignChars[char].length > 1 ? 's: ' : ': '}
                    {foreignChars[char].map((lineNumber, lineIndex) => (
                      <span key={`illegal-character-line-number-${lineIndex}`}>
                        <span className='text-red-500'>{lineNumber + 1}</span>
                        {lineIndex < foreignChars[char].length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                ))
                : <span className='text-green-500'>None ✅</span>}
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default MonacoEditor
