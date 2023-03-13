import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { AiFillDatabase } from "react-icons//ai";
import { AiFillMessage } from "react-icons//ai";

const SectionFive = () => {
  return (
    <section className='bg-[#175281] h-[110vh]'>
      <div className='flex mx-36 py-10'>
        <div className=''>
          <h2 className='text-white text-[27px] font-bold items-center'>GET IN TOUCH WITH OUR TEAM</h2>
          <div className='h-[80px] border-2 rounded-xl flex p-4'>
            <div className='border-r-2  h-9 flex items-center pr-3'><FaEnvelope className='w-6 h-6 text-white' /></div>
            <div className='pl-4 text-white'>
              <span className='text-[14px] font-bold tracking-widest'>MAIL TO OUR SALES DEPARTMENT</span><br />
              <span className='text-[22px]'>sales@appsquadz.com</span>
            </div>
          </div>
          <div className='h-[80px] border-2 rounded-xl flex p-4 mt-6 items-center'>
            <div className='border-r-2  h-9 flex items-center pr-3'><BsSkype className='w-6 h-6 text-white' /></div>
            <div className='pl-4 text-white'>
              <span className='text-[14px] font-bold tracking-widest'>OUR SKYPE ID</span><br />
              <span className='text-[22px]'>shahbazalam</span>
            </div>
          </div>
          <div className=' border-2 rounded-xl flex p-4 mt-6 items-center'>
            <div className='border-r-2  h-24 flex items-center pr-3'><BsFillTelephoneFill className='w-6 h-6 text-white' /></div>
            <div className='pl-4 text-white'>
              <span className='text-[14px] font-bold tracking-widest'>OUR PHONE NUMBER</span><br />
              <span className='text-base font-light '>+91- 8434165758(India)</span><br />
              <span className='text-base font-light '>+91 6205216661(USA)</span><br />
              <span className='text-base font-light'>+91 8340654967(Turkey)</span><br />
              <span className='text-base font-light'>+91 8863994575(UAE)</span>
            </div>
          </div>
        </div>
        <div className='border-l-[1px] border-gray-600 mx-8 h-[74vh]'></div>
        <div className='border bg-white rounded-xl h-[95vh] w-[55%]'>
          <div className='px-10 pt-10'>
            <div className=' py-4 mb-11 relative grid grid-cols-2 gap-10 text-[#486e90] text-[15px] font-thin'>
              <div className='relative border-b flex items-center w-50 '>
                <CgProfile className='absolute  w-4 h-4' />
                <input name="name" />
                <label className='  absolute left-7 tracking-wider  w-[100%] '>First Name*</label>
              </div>
              <div className='relative border-b flex items-center'>
                <CgProfile className='absolute  w-4 h-4' />
                <input name="name" />
                <label className=' absolute left-7 tracking-wider  w-[100%] '>Last Name*</label>

              </div>
              <div className='relative border-b flex items-center'>
                <FaEnvelope className='absolute  w-4 h-4' />
                <input name="name" />
                <label className='  absolute left-7 tracking-wider  w-[100%] '>Email Address*</label>

              </div>
              <div className='relative border-b flex items-center'>
                <BsFillTelephoneFill className='absolute  w-4 h-4' />
                <input name="name" />
                <label className='  absolute left-7 tracking-wider  w-[100%] '>Phone Number*</label>

              </div>
              <div className='relative border-b flex items-center'>
                <CgProfile className='absolute  w-4 h-4' />
                <input name="name" />
                <label className='  absolute left-7 tracking-wider  w-[100%] '>Company Name*</label>

              </div>
              <div className='relative border-b flex items-center'>
                <GiEarthAmerica className='absolute  w-4 h-4' />
                <input name="name" />
                <label className=' absolute left-7 tracking-wider  w-[100%] '>Country*</label>

              </div>
              <div className='relative border-b flex items-center'>
                <AiFillDatabase className='absolute  w-4 h-4' />
                <input name="name" />
                <label className='absolute left-7 tracking-wider  w-[100%] '>Category*</label>

              </div>
              <div className='relative border-b flex items-center'>
                <FaDollarSign className='absolute  w-4 h-4' />
                <input name="name" />
                <label className=' absolute left-7 tracking-wider  w-[100%] '>Your Budget Range*</label>
              </div>
            </div>
            <div className='relative flex items-center text-[#486e90]'>
              <AiFillMessage className='absolute  w-4 h-4' />
              <label className='  absolute left-7 tracking-wider  w-[100%] '>Tell Us We are Listening*</label>
            </div>
            <div>
              <textarea className='border h-20 w-[100%] mt-3'></textarea>
            </div>
            <div className='flex justify-center my-7'>
              <div className='border border-[#486e90] px-2 py-1 w-64 text-center flex justify-center bg-[#8a73731c]'><FaCloudUploadAlt className='h-6 w-6 text-[#175281]'/><input type='file' className='text-gray-600 tracking-wider pl-2' /></div>
            </div>
            <div className='flex justify-center'>
              <button className='border rounded-full bg-[#175281] text-white px-10 py-3 tracking-wide'>Send Your Enquiry</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
