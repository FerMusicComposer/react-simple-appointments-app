import { BiSearch, BiCaretDown } from 'react-icons/bi';
import DropDown from './DropDown';
import { useState } from 'react';

const SearchBar = ({ query, onQueryChange }) => {
    const [toggleSort, setToggleSort] = useState(false);

    return (
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSearch />
                    <label htmlFor="searchBar" className="sr-only" />
                </div>
                <input
                    type="text"
                    onChange={event => onQueryChange(event.target.value)}
                    name="searchBar"
                    id="searchBar"
                    value={query}
                    className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 sm:text-sm border-gray-300"
                    placeholder="Search"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <div>
                        <button
                            type="button"
                            onClick={() => setToggleSort(!toggleSort)}
                            className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            Sort by <BiCaretDown className="ml-2" />
                        </button>
                        {toggleSort ? <DropDown /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
