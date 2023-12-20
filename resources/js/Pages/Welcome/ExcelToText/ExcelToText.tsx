import ExcelToTextButton from './ExcelToTextButton';
import { ExcelToTextContextProvider } from './Contexts/ExcelToTextContext';

const ExcelToText = () => {
  return (
    <ExcelToTextContextProvider>
      <ExcelToTextButton />
    </ExcelToTextContextProvider>
  );
}

export default ExcelToText