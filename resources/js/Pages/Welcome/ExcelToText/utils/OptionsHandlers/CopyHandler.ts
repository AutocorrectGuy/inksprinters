import { customToastProps } from '@/Components/Toast/CustomToastContainer'
import { toast } from 'react-toastify'

export const handleCopy = (inputText: string) => {
  navigator.clipboard
    .writeText(inputText)
    .then(() => toast.success('Text copied to clipboard!'))
    .catch((err) => toast.error(`Failed to copy text: \n${err}`, customToastProps))
}
