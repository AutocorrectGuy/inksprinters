import { Editor, useMonaco } from '@monaco-editor/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { editor as editorType } from 'monaco-editor'

// Set of printable Windows-1252 characters for character validation
const windows1252PrintableChars = new Set([
  '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?',
  '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_',
  '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', 'DEL',
  '€', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹', 'Œ', 'Ž', '‘', '’', '“',
  '”', '•', '–', '—', '˜', '™', 'š', '›', 'œ', 'ž', 'Ÿ',
  ' ', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', 'SHY', '®', '¯',
  '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿',
  'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï',
  'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß',
  'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï',
  'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'
])

// Identifies characters in the text that are not part of Windows-1252 encoding
const collectNonWindows1252Chars = (monacoValue: string): { [key: string]: number[] } => {
  const nonWindows1252Chars: { [key: string]: number[] } = {}

  monacoValue.split('\n').forEach((lineText, lineIndex) => {
    for (let char of lineText) {
      if (char === '\n' || char === '\r' || windows1252PrintableChars.has(char))
        continue

      // Record line indexes of non-Windows-1252 characters
      if (Object.keys(nonWindows1252Chars).includes(char)) {
        if (!nonWindows1252Chars[char].includes(lineIndex)) {
          nonWindows1252Chars[char] = [...nonWindows1252Chars[char], lineIndex]
        }
      } else {
        nonWindows1252Chars[char] = [lineIndex]
      }
    }
  })

  return nonWindows1252Chars
}

// Extracts unique values from object arrays
function getUniqueValuesFromObjectArrays<T>(data: Record<string, T[]>): T[] {
  let uniqueValues = new Set<T>()

  // Add each value to a Set to ensure uniqueness
  for (let values of Object.values(data))
    values.forEach(value => uniqueValues.add(value))

  return Array.from(uniqueValues)
}

// Main App component
const MonacoEditor = ({ inputText, setInputText }: { inputText: string, setInputText: React.Dispatch<React.SetStateAction<string>> }) => {
  const [nonWindows1252Chars, setNonWindows1252Chars] = useState<{ [key: string]: number[] }>({})
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

    const currNonWindows1252Chars = collectNonWindows1252Chars(inputText)
    const currentDecorations = getUniqueValuesFromObjectArrays(currNonWindows1252Chars)
      .map((i) => (createDecoration(i)))

    setNonWindows1252Chars(currNonWindows1252Chars)
    setDecorations(editorRef.current.deltaDecorations(decorations, currentDecorations))
  }, [inputText])

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
            <div>Illegal characters (that are not supported in "Windows 1252" encoding): </div>
            <div>
              {Object.keys(nonWindows1252Chars).length > 0
                ? Object.keys(nonWindows1252Chars).map((char, index) => (
                  <div key={`illegal-character-${index}`}>
                    <span className='text-yellow-400'>{char}</span> on line
                    {nonWindows1252Chars[char].length > 1 ? 's: ' : ': '}
                    {nonWindows1252Chars[char].map((lineNumber, lineIndex) => (
                      <span key={`illegal-character-line-number-${lineIndex}`}>
                        <span className='text-red-500'>{lineNumber + 1}</span>
                        {lineIndex < nonWindows1252Chars[char].length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                ))
                : <span className='text-green-500'>none</span>}
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default MonacoEditor
