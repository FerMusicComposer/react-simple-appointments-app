import { BiCalendar } from 'react-icons/bi';
import SearchBar from './components/SearchBar';

function App() {
    return (
        <div className="App container mx-auto mt-3 font-thin">
            <h1 className="text-5xl">
                <BiCalendar className="inline-block text-red-400" />
                Your Appointments
            </h1>
            <SearchBar />
        </div>
    );
}

export default App;
