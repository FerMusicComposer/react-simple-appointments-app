import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import SearchBar from './components/SearchBar';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';

function App() {
    const [appointmentList, setAppointmentList] = useState([]);

    const fetchData = useCallback(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                setAppointmentList(data);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const onDeleteAppointment = appointmentId => {
        setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId));
    };

    return (
        <div className="App container mx-auto mt-3 font-thin">
            <h1 className="text-5xl ">
                <BiCalendar className="inline-block text-red-400 mr-3 align-top" />
                Your Appointments
            </h1>
            <AddAppointment />
            <SearchBar />
            <ul className="divide-y divide-gray-200">
                {appointmentList.map(appointment => (
                    <AppointmentInfo
                        key={appointment.id}
                        appointment={appointment}
                        onDeleteAppointment={onDeleteAppointment}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
