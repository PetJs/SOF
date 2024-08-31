import { useState } from 'react'
import FoodCard from './food-card.jsx'
import LoadingCard from './loading-card.jsx'

const SuggestionsPage = () =>{
    const [loading, setLoading] = useState(true)

    const searchFood = () =>{
        return null
    }


    return(
        <>
            <div className="  flex flex-col justify-start items-center pt-40">
                <h1 className="text-5xl text-center text m-8 font-extrabold ">Don't know what to cook? Don't worry we've got you </h1><span className="bg-[#964b00db]  rounded-full text-white text-5xl font-extrabold  pb-6 px-8 pt-2 text-center">covered.</span>
                <div className="flex justify-center gap-2 mt-10 max-w-[100%] px-8 ">
                    <input onChange={searchFood} className="rounded-full outline-none px-4 font-bold w-96" placeholder="Onions, Tomatoes, rice, pepper..." type="text" />
                    <button className="bg-[#c54b1f] rounded-full text-lg text-white font-semibold px-10 py-4">Search</button>
                </div>
                <p className='font-bold mb-4 text-slate-700'>Try inputting more than one keyword in the searchbar to get accurate results. </p>
                <div className="flex flex-wrap gap-4  w-[70%] ">
                        {loading?
                            (
                                <>
                                <LoadingCard/>
                                <LoadingCard/>
                                <LoadingCard/>
                                <LoadingCard/>
                                </>

                            ):(
                                <FoodCard/>
                            )
                        }
                </div>

            </div>
        </>
    )
}

export default SuggestionsPage