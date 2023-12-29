import { Dispatch, SetStateAction } from 'react';
import { pickColumn } from './Utils/ColumnPicker';

type TableHeaderCellProps = {
  isSelected: boolean;
  columnIndex: number
  setSelectedColumns: Dispatch<SetStateAction<boolean[]>>
};

const TableHeaderCell = ({ isSelected, columnIndex, setSelectedColumns }: TableHeaderCellProps) => {

  const attributes = isSelected
    ? {
      cellText: '',
      tdClassName: 'bg-gray-600 text-white',
      btnClassName: 'btn-primary',
      btnText: 'Selected'
    }
    : {
      tdClassName: 'bg-base-100',
      btnClassName: 'btn-secondary',
      btnText: 'Pick'
    };

  return (
    <td
      onClick={(e) => pickColumn(columnIndex -1, e, setSelectedColumns)}
      className={`select-none cursor-pointer w-40 text-center border-x border-gray-600 outline outline-1 outline-gray-600 -outline-offset-1 ${attributes.tdClassName}`}
    >
      <div className='mr-2'>{`Nº ${columnIndex}`}</div>
      <button
        className={`btn btn-xs ${attributes.btnClassName}`}
      >
        {attributes.btnText}
      </button>
    </td>
  );
};

export default TableHeaderCell;