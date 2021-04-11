import React, { useState } from "react"
import sampleAvatar from '../images/national-cancer-institute-6FabKijVwAU-unsplash.jpg'
import pointer from '../images/pointer-dark.png'
import dollars from '../images/dolars.png'
import DatePicker from 'react-date-picker'
import AppointmentPicker from 'appointment-picker';
import '../../node_modules/appointment-picker/dist/appointment-picker.css';
import Button from '@material-ui/core/Button';

class AppoPicker extends React.Component {

    constructor(props) {
        super(props);
        this.options = {
            // Here we can add some specific options of our timepicker
            leadingZero: true,
            startTime: 10,
            endTime: 15,
            minTime: 10,
            maxTime: 15,
            interval: 30,
            disabled: ['12:30', '13:30'],
        };
        // this.state = { time: {} };
        this.pickerRef = React.createRef();
        this.onTimeSelect = this.onTimeSelect.bind(this);
    }

    onTimeSelect(event) {
        console.log('change.appo.picker', event.time);
        this.setState({ time: event.time });
        // Or do something different with your time object
    }

	render() {
        return (
            <div className='flex justify-center mt-2 mb-4'>
                <input type="text" className='shadow-lg text-center w-1/3 rounded-sm border-gray-500 border' ref={ this.pickerRef }></input>
            </div>);
	}

    componentDidMount() {
    	this.picker = new AppointmentPicker(this.pickerRef.current, this.options);
        this.pickerRef.current.addEventListener('change.appo.picker', this.onTimeSelect);
    }

    componentWillUnmount() {
        this.pickerRef.current.removeEventListener('change.appo.picker', this.onTimeSelect);
        this.picker.destroy();
    }
}


export default function SearchedDoctor(){

    const [value, onChange] = useState(new Date());

    return(
        <div className='flex max-w-xl bg-primaryBg mx-auto my-2 rounded-lg'>
            <div className='leftSide w-full p-2'>
                <div className='flex'>
                    <img src={sampleAvatar} className='w-20 rounded-md mr-2 mb-1' />
                    <div className='flex flex-col'>
                        <span className='font-medium'>dr Eustachy Motyka</span>
                        <span className='text-sm font-medium'>Stomatolog</span>
                    </div>
                </div>
                <div>
                    <span className='text-sm'>Tutaj lekarz produkuje się jaki on jest fajny, piękny i po wizycie odrosną Ci mleczaki</span>
                </div>
                <hr className='my-2 bg-gray-300'/>
                <div className='flex my-2'>
                    <img src={pointer} className='w-6 h-6 mr-2'></img>
                    <span>Adres: tutaj adres kliniki</span>
                </div>
                <div className='flex my-2'>
                    <img src={dollars} className='w-6 h-6 mr-2'></img>
                    <span>Konsultacja: tutaj kwota konsultacji</span>
                </div>
            </div>
            <div className='rightSide p-1 flex flex-col w-full rounded-r-lg justify-center'>
                <p className='text-center mt-1 mb-4'>Wybierz datę i godzinę wizyty</p>
                <DatePicker format='dd-MM-y' onChange={onChange} value={value} className='mb-2 w-2/3 text-center bg-white mx-auto'/>
                <AppoPicker/>
                <Button variant="contained" color='primary' className='w-3/4 self-center'>Zarezerwuj wizytę</Button>
            </div>
        </div>
    )
}