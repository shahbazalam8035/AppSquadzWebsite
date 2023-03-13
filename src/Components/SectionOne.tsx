import React from 'react'
import anti from "../assets/section-images/anti-capture/anti.png"
import app from "../assets/section-images/app-security/app.png"
import mobile from "../assets/section-images/mobile-app/mobile.png"
import multi from "../assets/section-images/multi-dem/multi.png"
import ott from "../assets/section-images/ott-app/ott.png"
import pendrive from "../assets/section-images/pendrive/pendrive.png"
import sd from "../assets/section-images/sd-card/sd.png"
import video from "../assets/section-images/video-on/video.png"

const SectionOne = () => {
    return (
        <div className='bg-[#ebe8e5] px-16 pb-8'>
            <div className=' justify-center items-center text-center flex flex-col'>
                <h2 className='text-4xl font-semibold mb-6 mt-7'>Our Flagship Product - VideoCrypt, Securely Host <br />
                    the Premium Media Content</h2>
                <p className=' text-xl font-extralight'>Next Generation Secured Video Streaming Solution</p>
            </div>
            <div className='grid grid-cols-4 gap-4 content-center'>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={anti} alt="" /><h4 className='text-lg ml-2 text-left'>Video On <br />Demand</h4></div>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={app} alt="" /><h4 className='text-lg ml-2 text-left'>OTT<br />Application</h4></div>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={mobile} alt="" /><h4 className='text-lg ml-2 text-left'>Multi DRM <br />Solution</h4></div>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={multi} alt="" /><h4 className='text-lg ml-2 text-left'>Mobile <br />Application</h4></div>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={ott} alt="" /><h4 className='text-lg ml-2 text-left'>Pendrive<br />Solution</h4></div>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={pendrive} alt="" /><h4 className='text-lg ml-2 text-left'>SD Card<br />Software</h4></div>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={sd} alt="" /><h4 className='text-lg ml-2 text-left'>App<br />Security</h4></div>
                <div className='flex  justify-center items-center bg-white rounded-md p-4 m-3 shadow-custom'><img src={video} alt="" /><h4 className='text-lg ml-2 text-left'>App<br />Capture</h4></div>
            </div>
        </div>
    )
}

export default SectionOne
