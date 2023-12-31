import { AppSettingsType } from '../../config/TextEditorSettings'

export const lineSpacingHandler = (settings: AppSettingsType, textArray: string[]) => {
  const lineSpacing = settings.lineSpacing === 'none' ? 1 : 2
  return settings.textWrap
    ? textArray.map((cell) => cell.toString().replace(/[\r\n]+/g, ' ')).join('\n'.repeat(lineSpacing))
    : textArray.join('\n'.repeat(lineSpacing))
}
