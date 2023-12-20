import { SettingsType } from "../TextEditorSettings"

export const lineSpacingHandler = (settings: SettingsType, excelText:string[]) => {
  const lineSpacing = settings.lineSpacing === 'none' ? 1 : 2
  return settings.textWrap
    ? excelText.map((cell) => cell.replace(/[\r\n]+/g, ' ')).join('\n'.repeat(lineSpacing))
    : excelText.join('\n'.repeat(lineSpacing))
}