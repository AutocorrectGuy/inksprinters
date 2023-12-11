type Props = {
  defaultChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Updated type
  labelText?: string;
  width?: number | string
}

const TailwindcssCheckbox = ({ defaultChecked, onChange, labelText, width }: Props) => (
  <div className="form-control bg-base-300 rounded-lg px-2 items-center justify-center py-1" style={{width}}>
    {labelText
      ? <label className="label cursor-pointer flex items-center justify-between w-full">
        <div className="label-text text-sm pr-2">{labelText}</div>
        <input type="checkbox" defaultChecked={defaultChecked} onChange={onChange} className="checkbox bg-base-200" />
      </label>
      : <input type="checkbox" defaultChecked={defaultChecked} onChange={onChange} className="checkbox bg-base-200" />
    }
  </div>
)


export default TailwindcssCheckbox;