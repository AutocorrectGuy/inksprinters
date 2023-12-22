import { TextEncodingType } from "../TextEditorSettings";

export const handleDownload = async (inputText: string, encoding: TextEncodingType) => {
  try {
    const response = await fetch('/api/download-encoded-text-file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: inputText,
        encoding: encoding,
      }),
    });

    const data = await response.json();
    const fileName = data.fileName;

    const downloadLink = document.createElement('a');
    downloadLink.href = `/storage/${fileName}`;
    downloadLink.download = fileName;
    downloadLink.click();
  } catch (error) {
    console.error('Error during file download:', error);
  }
};