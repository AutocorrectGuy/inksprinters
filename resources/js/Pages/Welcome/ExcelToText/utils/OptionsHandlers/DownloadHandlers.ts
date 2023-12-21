import { TextEncoder } from 'text-encoding'
import { TextEncodingType } from '../TextEditorSettings'

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

export const handleDownload = (inputText: string, encoding: string) => {
  try {
    // Convert the string to a binary format in the desired encoding
    const binaryStr = unescape(encodeURIComponent(inputText));
    
    // Create an array of character codes from the binary string
    const charCodes = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
      charCodes[i] = binaryStr.charCodeAt(i);
    }

    // Create a Blob from the character codes
    const blob = new Blob([charCodes], { type: `text/plain;charset=${encoding}` });

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `names-list-${encoding}.txt`; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error during file download:', error);
  }
}
