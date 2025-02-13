import Card from "./Card"
import CardData from "./CardData"
const Cards = () => {
    return (
        <div className='Container flex flex-col gap-5'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='text-[#FBA403] font-normal lg:text-[26px] md:text-[23px] text-[20px] leading-8'>Why should you ride with us?</h3>
                <h2 className='font-bold lg:text-[45px] text-[35px] md:text-[40px] leading-[52px] '>Best in class rides</h2>
            </div>
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {
                    CardData.map((item) => (
                        <Card key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Cards