import React from "react"

const LoadingCard = () =>{
    return(
        <>
        <div className='p-4 my-4 bg-slate-300 w-64 h-40 rounded-lg duration-100 hover:scale-105'>
            <div className='animate-pulse'>
            <div className='bg-slate-200 rounded-md h-20 w-20 mb-4'></div>
            <div className='bg-slate-100 rounded-md h-6 w-40 mb-4'></div>
            </div>
        </div>
        </>
    )
}

export default LoadingCard