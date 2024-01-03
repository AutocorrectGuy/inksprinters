import MainLayout from '@/Layouts/MainLayout'
import { PageProps } from '@/types'
import { Editor, useMonaco } from '@monaco-editor/react'
import { useEffect, useState } from 'react'
import { editor as editorType } from 'monaco-editor'


type Props = {}

const Monaco = (props: PageProps) => {
  const [editorText, setEditorText] = useState<string>('hello world')
  const [mounted, setMounted] = useState<boolean>(false)
  const [isThemeLoaded, setIsThemeLoaded] = useState<boolean>(false)
  const monaco = useMonaco()

  const onMount = () => {
    setMounted(true)
  }

  useEffect(() => {
    if (!monaco) return
    import('monaco-themes/themes/GitHub Dark.json').then((data) => {
      monaco.editor.defineTheme('github-dark', data as editorType.IStandaloneThemeData)
      setIsThemeLoaded(true)
    })
  }, [monaco])

  return (
    <MainLayout auth={props.auth}>
      <div className='grow flex flex-col max-w-7xl w-full'>
        <div className='text-center text-4xl pb-4 max-w-7xl w-full font-semibold'>Monaco Text Editor</div>
        <div className='flex-grow flex flex-col h-10'>

          {isThemeLoaded ? (
            <div className="flex h-full flex-col">
              <Editor
                value={editorText as string}
                theme="github-dark"
                className="flex-grow p-4"
                language='markdown'
                loading={''}
                width={'100%'}
                height={'100%'}
                onMount={() => onMount()}
                onChange={(val) => setEditorText(val as string)}
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default Monaco