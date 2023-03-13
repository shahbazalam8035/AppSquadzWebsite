import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import { BsFillTelephoneFill } from 'react-icons/bs'
import logo from "../assets/logo/logo.png"
import flexImg from "../assets/flexibility-scalability/flexImg.png";
import inhanceImg from "../assets/enhanced-security/inhancImg.png";
import globImg from "../assets/global-compliance/globImg.png";
import mediaImg from "../assets/media-content/mediaImg.png"

const Header = () => {
  const myStyle = {
    backgroundImage: "url('https://www.appsquadz.com/assets/images/cloud-migration.webp')",
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  };
  return (
    <><section className='' style={myStyle}>
      <header className=" " >
        <div className="grid grid-cols-4 gap-4 text-white py-2 px-4 font-normal" >
          <div className="w-52"><img src={logo} alt="logo" /></div>
          <div className="col-span-3">
            <div className='flex items-center mb-3 justify-end'>
              <ul className='flex  text-[15px] '>
                <li className=' px-2 hover:text-red-500 cursor-pointer'>Schedule a Meating</li>|
                <li className=' px-2 hover:text-red-500 cursor-pointer'>Request a Quote</li>|
                <li className=' flex px-2 hover:text-red-500 cursor-pointer'><CiMail className='m-1' />sales@appsSquadz.com</li>|
                <li className=' px-2 hover:text-red-500 cursor-pointer '>Sales: +91-7845968574</li>|
                <li className=' px-2 hover:text-red-500 cursor-pointer'>HR: +91-9685741236</li>|
                <li className='flex  px-3 hover:text-red-500 cursor-pointer '><BsFillTelephoneFill className='m-1' /><FaAngleDown className='my-1' /></li>
              </ul>
            </div>
            <div className=''>
              <ul className='flex justify-end'>
                <li className='dropdown pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer hover:bg-blue-800 hover:border-b-8 hover:border-blue-900 rounded-t-md'>WHY APPSQUADZ<FaAngleDown className='m-1' />
                  <div className='dropdown-menu border h-80'>
                    <div className='flex border '>
                      <div className='border'>
                        <ul className='text-start border'>
                          <li><img src="" alt="" /> TESTIMONIALS</li>
                          <li>CASE STUDIES</li>
                          <li>PORTFOLIO</li>
                          <li>PARTNER WITH US</li>
                          <li>BLOG</li>
                        </ul>
                      </div>
                      <div className='border'>02</div>
                      <div className='border'>03</div>
                      <div className='border'>04</div>
                    </div>
                  </div>
                </li>
                <li className='pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer'>SERVICES<FaAngleDown className='m-1' /></li>
                <li className='pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer'>SOLUTIONS<FaAngleDown className='m-1' /></li>
                <li className='pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer'>PRODUCTS<FaAngleDown className='m-1' /></li>
                <li className='pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer'>OUTSOURCING<FaAngleDown className='m-1' /></li>
                <li className='pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer'>CASE STUDIES<FaAngleDown className='m-1' /></li>
                <li className='pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer'>PORTFOLIO<FaAngleDown className='m-1' /></li>
                <li className='pt-[10px] pr-[13px] pb-[9px] pl-[5px] flex cursor-pointer bg-[#ff6364] rounded-md'>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className='mx-[75px]'>
        <div className='w-[50%] text-white '>
          <div className='mt-8  '>
            <div className=''>
              <h1 className='text-[43px] font-semibold text-left'>Digitalize Content & <br /> Migrate to Cloud with Ease</h1>
            </div>
            <p className='text-[15px] text-justify text-[#ffffffbf]'>Over the years, the question has changed from why cloud to which cloud?
              Whether from an on-premises server to Cloud or Cloud to Cloud.
              Our Solution Architects enable you to become future-ready through the Cloud Migration.</p>
          </div>
          <div className='grid grid-cols-2  gap-8 mt-10'>
            <div className='flex bg-white rounded-lg p-3'>
              <div><img src={mediaImg} alt="" /></div>
              <div className=' flex items-center text-black text-base text-left font-bold ml-2'><p>Media <br />Content</p></div>
            </div>
            <div className='flex  bg-white rounded-lg p-3'>
              <div><img src={inhanceImg} alt="" /></div>
              <div className=' flex items-center text-black text-base text-left font-bold ml-2'><p>Enhanced <br />Security</p></div>
            </div>
            <div className='flex  bg-white rounded-lg p-3 '>
              <div><img src={flexImg} alt="" /></div>
              <div className=' flex items-center text-black text-base text-left font-bold ml-2'><p>Flexibility & <br />Scalability</p></div>
            </div>
            <div className='flex  bg-white rounded-lg p-3'>
              <div><img src={globImg} alt="" /></div>
              <div className=' flex items-center text-black text-base text-left font-bold ml-2'><p>Specialize in <br />Media Worked</p></div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header
