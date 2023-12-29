import { useContext, useEffect } from 'react'
import { ExcelToTextContext } from '../Contexts/ExcelToTextContext'

const ForgeignCharTerminal = () => {

  const {
    foreignChars,
    settings: { textEncoding },
  } = useContext(ExcelToTextContext)

  useEffect(() => {
    console.log('updating foreign chars')
  }, [foreignChars])

  return (
    <div className='py-2 bg-base-200 px-5 overflow-y-scroll leading-5' style={{ height: 92 }}>
      <div>Illegal characters (for {textEncoding} encoding): </div>
      <p className="float-left font-mono">
        {Object.keys(foreignChars).length > 0
          ? Object.keys(foreignChars).map((char, index) => {
            const lines = foreignChars[char].map((lineNumber, lineIndex) => (
              <span key={`illegal-character-line-number-${lineIndex}`}>
                <span className='text-red-500'>{lineNumber + 1}</span>
                {lineIndex < foreignChars[char].length - 1 ? ', ' : ''}
              </span>
            ));

            return (
              <span key={`illegal-character-${index}`}>
                <span className='text-yellow-400'>{char}</span> on line
                {foreignChars[char].length > 1 ? 's: ' : ': '}
                {lines}
                {index < Object.keys(foreignChars).length - 1 ? <br /> : ''}
              </span>
            );
          })
          : <span className='text-green-500'>None ✅</span>
        }
      </p>
    </div>
  )
}

export default ForgeignCharTerminal