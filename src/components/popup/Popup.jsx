

import bannerPhoto from '../../assets/bannerPhoto.png';
import Button from '../button/Button';
import './Popup.css';
import PopupCardData from './PopupCardData';

const Popup = ({ handlePopup }) => {
    return (
        <div className="fixed top-10 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
            {/* <div className="bg-[#282828] max-w-[90%] sm:max-w-md w-full p-4 sm:p-6 rounded-lg shadow-lg text-center relative"> */}
            <div className="bg-[#282828] lg:min-w-[500px] w-full p-6 rounded-lg shadow-lg max-w-md text-center relative max-h-[90vh] overflow-y-auto">
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <img src={bannerPhoto} alt="taxi-img" className='max-w-[150px] sm:max-w-[190px]' />
                    <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                        <h3 className='text-[#FBA403] text-lg'>Drive with MyRide</h3>
                        <p className='text-sm'>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-5'>
                    <div className='flex flex-col sm:flex-row gap-2.5'>
                        <input type="text" placeholder='First Name' className='border border-white p-2 rounded-md outline-none w-full' />
                        <input type="text" placeholder='Last Name' className='border border-white p-2 rounded-md outline-none w-full' />
                    </div>
                    <input type="text" placeholder='Email' className='border border-white p-2.5 rounded-md outline-none w-full' />
                    <fieldset className='border border-white p-2.5 rounded-md w-full'>
                        <legend className='text-left ml-1'>Country</legend>
                        <select className='outline-none w-full bg-[#242424] p-1 rounded'>
                            <option>Singapore</option>
                            <option>Tokio</option>
                            <option>New York</option>
                        </select>
                    </fieldset>
                    <select className='p-2.5 border border-white rounded-md w-full bg-[#242424]'>
                        <option>City</option>
                        <option>Tailand</option>
                        <option>Pekin</option>
                    </select>
                    <input type="text" placeholder='Referral Code' className='border border-white p-2.5 rounded-md outline-none w-full' />
                    <div className='w-full flex justify-between items-center text-sm'>
                        <h3>I drive my own car</h3>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <h3 className='text-[#FBA403] text-sm text-left'>Select your car type</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                        {PopupCardData.map((item) => (
                            <div key={item.id} className='border border-white hover:border-[#FBA403] cursor-pointer flex flex-col rounded-sm h-[80px] justify-center items-center p-2'>
                                <img src={item.img} alt={item.title} className='w-12 h-12' />
                                <h5 className='text-xs'>{item.title}</h5>
                            </div>
                        ))}
                    </div>
                    <Button text={'Submit'} handlePopup={handlePopup} />
                    <label className='flex items-start gap-2 text-xs'>
                        <input type="checkbox" className='cursor-pointer mt-1' />
                        <p>I agree to MyRide's <span className='text-[#FBA403]'>Terms & Conditions</span> and <span className='text-[#FBA403]'>Privacy Policy</span>.</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Popup;
