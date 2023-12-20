export type TextWrapType = boolean
export type LineSpacingType = 'none' | 'single'
// Allowed encodings from `text-encoding` package:
// utf-8 ibm866 iso-8859-2 iso-8859-3 iso-8859-4 iso-8859-5 iso-8859-6 iso-8859-7 
// iso-8859-8 iso-8859-8-i iso-8859-10 iso-8859-13 iso-8859-14 iso-8859-15 iso-8859-16 
// koi8-r koi8-u macintosh windows-874 windows-1250 windows-1251 windows-1252 windows-1253 
// windows-1254 windows-1255 windows-1256 windows-1257 windows-1258 x-mac-cyrillic gb18030 
// hz-gb-2312 big5 euc-jp iso-2022-jp shift_jis euc-kr replacement utf-16be utf-16le x-user-defined
export type SpecialTextEncodingType = 'windows-1252'
export type TextEncodingType = SpecialTextEncodingType | 'utf-8'

export type SettingsType = {
  textWrap: TextWrapType
  lineSpacing: LineSpacingType
  textEncoding: TextEncodingType
}

export const initialSettings: SettingsType = {
  textWrap: false, // Checkbox state
  lineSpacing: 'none', // Toggle between 'none' and 'single'
  textEncoding: 'windows-1252', // Default encoding type
}

export const textEditorInitialOptions: {
  textWrap: boolean
  lineSpacing: LineSpacingType[]
  textEncoding: TextEncodingType[]
} = {
  textWrap: false,
  lineSpacing: ['none', 'single'],
  textEncoding: ['windows-1252', 'utf-8'],
}

export const loadSettings = () => {
  const saved = localStorage.getItem('excel-to-text-settings')
  return saved ? JSON.parse(saved) : initialSettings
}
