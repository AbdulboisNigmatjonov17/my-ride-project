import BannerAbout from '../../components/banner/about/BannerAbout'
import BottomBanner from '../../components/banner/BottomBanner'
import BookingSection from '../../components/booking/BookingSection'
import Cards from '../../components/card/Cards'

const HomePage = () => {
  return (
    <>
      <BookingSection />
      <BannerAbout />
      <Cards />
      <BottomBanner />
    </>
  )
}

export default HomePage