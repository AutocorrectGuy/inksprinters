import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

type Props = {
  items: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  width?: number | string
  label?: string
};

const TailwindcssDropdown = ({
  items,
  selectedItem,
  onSelect,
  width = 100,
  label
}: Props) => {
  const [uuid, _uuid] = useState(uuidv4());
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}
      className={`${label ? 'flex items-center justify-between bg-base-300 rounded-lg cursor-pointer group' : ''}`}
      onClick={toggleDropdown}
      style={{ width }}
    >

      {/* Label */}
      {label && <div className='px-3 py-2'>{label}</div>}

      {/* Button */}
      <div className="relative inline-block text-left">
        <button className="btn text-xs flex items-center justify-center px-3 whitespace-nowrap group-hover:bg-base-100 hover:bg-base-100">
          <p className="pr-1 whitespace-nowrap">{selectedItem}</p>
          <FontAwesomeIcon icon={faChevronDown} className='w-3 h-3' />
        </button>

        {/* Selection menu */}
        {isOpen && (
          <div className="z-10 absolute right-0 shadow-lg shadow-neutral-900 bg-base-200 rounded-md mt-1" style={{width: dropdownRef.current?.offsetWidth}}>
            <ul className="py-2 text-sm">
              {items.map((item, i) => (
                <li key={`tailwindcss-dropdown-item-${i}`} onClick={() => { onSelect(item); setIsOpen(false); }} className="block p-2 hover:bg-base-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

  );
};

export default TailwindcssDropdown;
