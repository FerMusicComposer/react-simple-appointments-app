import { BiCheck } from 'react-icons/bi';

const DropDown = () => {
    const menuOptions = ['Pet Name', 'Owner Name', 'Date', 'Asc', 'Desc'];

    return (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {menuOptions.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                            role="menuitem"
                        >
                            {item} <BiCheck />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DropDown;
