import bannerPhoto from '../../assets/bannerPhoto.png'
const Popup = ({ handlePopup }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-[#282828] w-[680px] p-6 rounded-lg shadow-lg max-w-md text-center relative">
                <button
                    onClick={handlePopup}
                    className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-red-500 cursor-pointer"
                >
                    ✖
                </button>
                <div className='flex justify-between'>
                    <img src={bannerPhoto} alt="taxi-img" className='max-w-[190px]'/>
                    <div>
                        <h3>Drive with MyRide</h3>
                        <p>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
