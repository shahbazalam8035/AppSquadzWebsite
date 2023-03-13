import React from 'react'
import certificate1 from "../assets/sectionThreeImages/1.png"
import goodfirms from "../assets/sectionThreeImages/2.png"
import appfutura from "../assets/sectionThreeImages/3.png"
import certificate2 from "../assets/sectionThreeImages/4.png"
import top from "../assets/sectionThreeImages/5.png"
import best from "../assets/sectionThreeImages/6.png"

const SectionThree = () => {
    return (
        <section>
            <div className='bg-[#fff] px-16 pb-8'>
                <div className=' justify-center items-center flex flex-col p-2'>
                    <h2 className='text-4xl font-semibold mb-6 mt-7'>Digitizing Businesses with Innovative Solutions</h2>
                    <p className=' text-[15px] font-extralight text-justify'>With the emergence of cross-platform applications consisting of Artificial Intelligence, IoT, & Machine Learning Techniques, we revolutionized the way applications were made. AppSquadz is a premier Website and app development company in India comprised of skilled professionals to develop quality software hassle-free. Our ready-to-use solution providers develop applications showcasing the best user interface designs and integrated with the latest technologies.</p>
                    <p className=' text-[15px] font-extralight mt-6 text-justify'>Our application development strategies foster our ideology to provide solutions that are easy to use with excellent quality and offer bug-free compatibility. Thus, our services are acquired by the most top-notch enterprises around the world like Disney+ Hotstar, Max Skill First, IBT, HCL, and more. We are a team of mobile and website developers, UI/ UX designers, digital and offline marketers, support and testing, project managers, and human resources. With our agile process & ready-to-deploy approach, we are able to serve quality applications on time.</p>
                </div>
                <div className=' justify-center items-center flex flex-col p-2'>
                    <h2 className='text-4xl font-semibold mb-6 mt-7'>Web and Mobile Application Development Segments</h2>
                    <p className=' text-[15px] font-extralight text-justify'>With the modern IT revolution, a wide range of services has been introduced in the market such as E-Commerce and Retail, and more. All these services operate on cross-platforms even on Websites or on Mobile phones. Therefore, at AppSquadz, we build applications for various services that work on Mobile phones or on Websites flawlessly. Thus, our applications help our clients generate high customer engagement and create visibility for their services.</p>
                    <p className=' text-[15px] font-extralight mt-6 text-justify'>AppSquadz mobile application development company is comprised of values that enable individuals from global locations to get their applications built. Our proficiency in delivering E-Commerce, retails & Financial application development allows us to equip highly professional markets. We enable high-end functionality and qualitative analysis for app designing and upgrading the performance of our applications. Thus, we make native applications, hybrid applications, consumer software, and enterprise solutions with intuitive UI/ UX designs. AppSquadz headquartered in Noida, India is a multi-level proficient organization to deliver business development for innovation providers. We are also spread across the globe, including the United States, United Kingdom, UAE, Thailand, KSA, Latin America, and Spain. Therefore, we are the best coders for top-ranking development languages like HTML5/ CSS, Java, Kotlin, C, C++, and PHP.</p>
                </div>
                <div className=' justify-center items-center flex flex-col mt-16 p-2'>
                    <h2 className='text-4xl font-semibold mb-6 '>AppSquadz Certification and Awards</h2>
                    <div className='flex'>
                        <div className="w-[50%]"> <p className=' text-[15px] font-extralight text-justify'>We work diligently in an apt environment with agile practices to deliver applications with responsive functionalities. Moreover, we are also awarded as secure and smooth iOS app development service providers. Our applications are integrated with the latest and modern features to help you scale up your business professionalism digitally. We are a leading certified partner with AWS to deliver over 15 services including live class streaming, AWS media live, AWS CloudFront, and more. These services are offered at a discounted price to business-class services seekers in India. <br />
                            Moreover, we are a dedicated developer to champion the education system with the eLearning mobile app development services. Thus, our social campaign awarded us numerous times in the past with being ranked at the top in the app development market.</p></div>
                        <div className='grid grid-cols-3  gap-5 w-[50%] ml-[15px]'>
                            <div className='border-4 rounded-xl shadow-lg p-1 flex justify-center'><img src={certificate1} alt="" /></div>
                            <div className="border-4 rounded-xl shadow-lg p-1 flex justify-center"><img src={goodfirms} alt="" /></div>
                            <div className="border-4 rounded-xl shadow-lg p-1 flex justify-center"><img src={appfutura} alt="" /></div>
                            <div className="border-4 rounded-xl shadow-lg p-1 flex justify-center"><img src={certificate2} alt="" /></div>
                            <div className="border-4 rounded-xl shadow-lg p-1 flex justify-center"><img src={top} alt="" /></div>
                            <div className="border-4 rounded-xl shadow-lg p-1 flex justify-center"><img src={best} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThree
