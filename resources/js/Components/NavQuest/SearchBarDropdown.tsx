import Dropdown from '../Dropdown'

const SearchBarDropdown = () => (
  <div className="flex grow">
    <input
      type="text"
      placeholder="What are you looking for?"
      className="grow max-w-xs border-y border-l border-r-0 border-neutral-600 rounded-l-full bg-neutral-700 w-full placeholder:text-neutral-400 h-9 text-sm lg:text-base"
    />
    <Dropdown>
      <Dropdown.Trigger>
        <button
          type="button"
          className="text-sm lg:text-base flex items-center whitespace-nowrap font-light rounded-r-full border-y border-r border-neutral-600 text-neutral-400 bg-neutral-700 focus:outline-none transition ease-in-out duration-150 h-9 px-3 -translate-x-1"
        >
          Click me
          <svg
            className="ms-2 -me-0.5 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content contentClasses="bg-neutral-700">
        {[...Array(5)].map((_x, i) => (
          <Dropdown.Link
            className="text-neutral-200 hover:bg-neutral-600 active:bg-rose-600 focus:bg-rose-600"
            key={`search-dropdown-value-${i}`}
            href="/"
          >
            Option {i + 1}
          </Dropdown.Link>
        ))}
      </Dropdown.Content>
    </Dropdown>
  </div>
)

export default SearchBarDropdown
