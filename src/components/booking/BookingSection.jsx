import { Close, ExpandMore, Search } from '@mui/icons-material'
import taxiBooking from '../../assets/taxiBooking.png'
import Button from '../button/Button'
import { useRef } from 'react'
const BookingSection = () => {
    const inputRef = useRef(null);

    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    return (
        <div className='Container grid grid-cols-1 lg:grid-cols-2 justify-between items-center !mt-[10dvh]'>
            <div className='w-full flex justify-center p-10'>
                <img src={taxiBooking} alt="taxi-booking" className='lg:w-[600px]' />
            </div>
            <div className='lg:w-[600px] max-w-full flex flex-col gap-8 lg:p-0 md:pr-5 p-10'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <h3 className='uppercase font-normal lg:text-[26px] text-[22px] leading-[30px]'>Need a ride?</h3>
                    <h1 className='font-bold lg:text-[50px] text-[30px] leading-[60px] text-center'>Book with <span className='text-[#FBA403]'><span className='italic font-medium'>my</span>RIDE</span> now!</h1>
                </div>
                <form className='bg-[#2C2C2C] py-7 px-8 rounded-sm flex flex-col gap-3'>
                    <div className='w-full flex justify-between'>
                        <h4>Find a ride now</h4>
                        <span>Ride now</span>
                    </div>
                    <fieldset className='border border-[#FFFFFF3B] p-3.5 flex justify-between rounded-[4px] items-center hover:border-[#FBA403]'>
                        <legend className='mx-1 font-normal text-[12px] leading-3 text-[#FFFFFFB2] hover:text-[#FBA403]'>Your Pickup</legend>
                        <select name="" id="" className='outline-none border-none lg:w-[400px] '>
                            <option value="" className='text-[#2C2C2C]'>Current Location</option>
                            <option value="" className='text-[#2C2C2C]'>Tashkent</option>
                        </select>
                        <div className='flex gap-2'>
                            <Close />
                            <ExpandMore />
                        </div>
                    </fieldset>
                    <fieldset className='border border-[#FFFFFF3B] p-3.5 flex justify-between rounded-[4px] items-center hover:border-[#FBA403]'>
                        <legend className='mx-1 font-normal text-[12px] leading-3 text-[#FFFFFFB2] hover:text-[#FBA403]'>Your Destination</legend>
                        <input ref={inputRef} type="text" className='outline-none border-none lg:w-[400px] w-full' />

                        <div className='flex gap-2'>
                            <button onClick={(e) => {
                                e.preventDefault();
                                clearInput()
                            }}>
                                <Close />
                            </button>
                            <ExpandMore />
                        </div>
                    </fieldset>
                    <Button text={<><Search /> Find a driver</>} />
                </form>
            </div>
        </div>
    )
}
export default BookingSection