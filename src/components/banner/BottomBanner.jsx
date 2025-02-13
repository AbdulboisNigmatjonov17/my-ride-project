import { useState } from 'react'
import bannerPhoto from '../../assets/bannerPhoto.png'
import Button from '../button/Button'
const BottomBanner = () => {
    const [showPopup, setShowPopup] = useState()

    const handlePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <section className='Container bg-[#313030] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-between items-center py-3.5 px-8'>
            <div className='w-full flex justify-center'>
                <img src={bannerPhoto} alt="driver-photo" />
            </div>
            <div className='max-w-[640px] flex flex-col gap-2.5'>
                <h3 className='font-bold text-[32px] leading-[40px]'>Become a Driver</h3>
                <p className='text-[#B3B3B3] font-normal text-[16px] leading-[26px]'>Be a part of a growing community of myRiders. Register as a driver and don't forget to register your car as well.</p>
            </div>
            <div className='w-full flex justify-center'>
                <Button text={'Register now'} />
            </div>
        </section>
    )
}

export default BottomBanner