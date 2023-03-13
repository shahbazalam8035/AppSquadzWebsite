import React, {useState} from 'react'
import {RxDotFilled} from "react-icons/rx"
interface slidesInterface{
url:string;
title:string;
content:string;
}

const sectionPortfolio = () => {
  const [currentIndex,setCurrentIndex] =useState(0)

  const slides :slidesInterface[]= [
  {
    url:"https://www.appsquadz.com/img/slider-img/made-easy-prime.webp",
    title:"Made Easy",
    content:"Made Easy is an online learning app available on Android & iOS platforms to provide simple and effective learning to all students preparing for the UPSC CSE exam. AppSquadz has designed, developed and implemented the AWS technology to support Live streaming and VOD with online study material to make this app useful for anyone preparing for this exam. In addition, we have ensured the Made Easy app has an effective UI/ UX and will always provide a helpful experience to all its users.",
  },
  {
    url:"	https://www.appsquadz.com/img/slider-img/career-point.webp",
    title:"Career Point",
     content:"Career Point is an eLearning app of Rejasthan well-known for providing the free online study materials to users. This powerful app is helpful for the online preparation of NEET, IIT-JEE, AIIMS, JIPMER, CBSE and state board exams. This application was built by AppSquadz Software using a simple UI and providing a clear message to all users. It provides online courses, video lectures, virtual notes and many others to enhance the UX of its user.",
  },
  {
    url:"	https://www.appsquadz.com/img/slider-img/sanskar.webp",
    title:"Sanskar Tv",
     content:"Sanskar is an OTT platform available as an application on both Android and iOS to provide spiritual lectures and bhajans available to all devotees. The best part of this application is the availability of Bhajans, Useful Lectures, Spiritual News and other relevant content. We have integrated numerous features into this app, one of which is a simple interface with smooth navigation to boost the experience of users.",
  },
  {
    url:"	https://www.appsquadz.com/img/slider-img/amar-ujala.webp",
    title:"Amar Ujala",
     content:"Amar Ujala is a media house famous for letting all its users stay updated. AppSquadz has developed an application for this media house to digitalize its newspaper and latest articles. Appsquadz has been instrumental in changing how a 70 year old News company operates as we have developed an amazing application to facilitate its online presence. Our app has dramatically increased its viewership to expand its business, especially online.",
  },
  {
    url:"https://www.appsquadz.com/img/slider-img/coca-cola.webp",
    title:"Coca Cola",
     content:"AppSquadz Software has developed the KoM Survey application that is compatible with its working on mobile devices for Coca-cola. Our efficient survey app provides relevant data for the company to enhance their operations by augmenting their services as per the result provided to them. This app was provided with the latest technology, including a simple and easy-to-use interface to allow its user to use that application effectively.",

  }
]
const goToSlide=(slideIndex: number)=>{
  setCurrentIndex(slideIndex)
}
  return (
    <section className='bg-gradient-to-r from-[#182848] to-[#4b6cb7] w-[100%]'>
      <div className='text-center pt-10'>
        <h2 className='text-white text-5xl font-semibold'>Our Portfolio</h2>
      </div>
      <div className=' px-24 flex'>
        <div className=' w-[40%] p-5'>
        <img className="px-5 duration-500  bg-center bg-cover group" src={slides[currentIndex].url} alt="" />
        </div>
        <div className='text-white w-[60%] p-8'>
        <h2 className=' text-5xl font-semibold'>{slides[currentIndex].title}</h2>
        <ul className='flex  mt-2 '>
            <li className='mr-[23px] p-1 text-base rounded-md bg-sky-600'>Web</li>
            <li className='mr-[23px] p-1 text-base  rounded-md bg-sky-600'>IOS</li>
            <li className='mr-[23px] p-1 text-base rounded-md bg-sky-600'>Android </li>
        </ul>
        <p className='text-justify mt-3 tracking-wide text-sm'>{slides[currentIndex].content}</p>
        <div className='my-4 '> <button className='bg-red-400 rounded-full px-5 py-2 tracking-widest hover:bg-blue-500'> View Case Study</button></div>
        </div>
      </div>
      <div className='flex py-2 justify-center'>
        {
          slides.map((slides,slideIndex)=>{
            return(
            <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer hover:text-slate-600'>
              <RxDotFilled className=''/>
            </div>)
          })
        }
      </div>
    </section>
  )
}

export default sectionPortfolio
