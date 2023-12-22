import { TextEncoder } from 'text-encoding'
import { TextEncodingType } from '../TextEditorSettings'
import { saveAs } from 'file-saver';


// export const handleDownload = (inputText: string, encoding: TextEncodingType) => {
//   try {
//     // Encode the text based on the provided encoding
//     const encoder = new TextEncoder(encoding, {
//       NONSTANDARD_allowLegacyEncoding: true,
//     })
//     const encodedData = encoder.encode(inputText)

//     // Create a Blob from the encoded data
//     const blob = new Blob([encodedData], { type: `text/plain;charset=${encoding}` })

//     // Create a download link and trigger the download
//     const link = document.createElement('a')
//     link.href = URL.createObjectURL(blob)
//     link.download = `names-list-${encoding}.txt` // Name of the downloaded file
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   } catch (error) {
//     console.error('Error during file download:', error)
//   }
// }

export const handleDownload = (inputText: string, encoding: TextEncodingType) => {
  try {
    // Encode the string with the specified encoding
    const encoder = new TextEncoder(encoding, { NONSTANDARD_allowLegacyEncoding: true });
    const bytes = encoder.encode(inputText);

    // Create a Blob from the bytes
    const blob = new Blob([bytes],);

    // Use FileSaver to save the file
    saveAs(blob, 'file.txt');
  } catch (error) {
    console.error('Error during file download:', error);
  }
}
