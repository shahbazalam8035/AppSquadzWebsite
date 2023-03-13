import React from 'react'


const SectionTechno = () => {
    const myStyle = {
        backgroundImage: "url('	https://www.appsquadz.com/landing_resources/assets/img/abstract_bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '1px solid #fff',
        height: "430px",
        width: "100%",
    }
    return (
        <section className='' style={myStyle}>
            <div className='text-center py-5'>
                <h2 className=' text-4xl font-semibold'>Technology Stacks</h2>
            </div>
            <div className='px-36 flex'>
                <div className=' bg-[#f1f1f1] w-80'>
                    <ul className=''>
                        <li className='py-2 pl-2 text-base font-light text-white bg-[#182848] '>Mobile App</li>
                        <li className='py-2 pl-2 text-base font-light hover:bg-[#dddddd] '>Front End</li>
                        <li className='py-2 pl-2 text-base font-light hover:bg-[#dddddd] '>Back End</li>
                        <li className='py-2 pl-2 text-base font-light hover:bg-[#dddddd] '>Open Source</li>
                        <li className='py-2 pl-2 text-base font-light hover:bg-[#dddddd] '>DevOps/Cloud</li>
                        <li className='py-2 pl-2 text-base font-light hover:bg-[#dddddd] '> Database</li>
                    </ul>
                </div>
                <div className='w-[70%]  grid grid-cols-4 gap-3 pl-10'>
                    <div className='flex justify-center items-center border-4 border-gray-300 shadow-lg rounded-lg '>
                        <div className='m-4'>
                            <img src="https://www.appsquadz.com/img/tech-stacks/ios.png" alt="" />
                            <p className='text-center'>IOS</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center border-4 border-gray-300 shadow-md rounded-lg'><div className='m-4'>
                        <img src="https://www.appsquadz.com/img/tech-stacks/android.png" alt="" />
                        <p className='text-center'>IOS</p>
                    </div></div>
                    <div className='flex justify-center items-center border-4 border-gray-300 shadow-lg rounded-lg'><div className='m-4'>
                        <img src="https://www.appsquadz.com/img/tech-stacks/swift.png" alt="" />
                        <p className='text-center'>Swift</p>
                    </div></div>
                    <div className='flex justify-center items-center border-4 border-gray-300 shadow-lg rounded-lg'><div className='m-4'>
                        <img src="https://www.appsquadz.com/img/tech-stacks/kotlin.png" alt="" />
                        <p className='text-center'>Kotlin</p>
                    </div></div>
                    <div className='flex justify-center items-center border-4 border-gray-300 shadow-lg rounded-lg'><div className='m-4  '>
                        <img src="https://www.appsquadz.com/img/tech-stacks/react-js.png" alt="" />
                        <p className='text-center'>React Native</p>
                    </div></div>
                    <div className='flex justify-center items-center border-4 border-gray-300 shadow-lg rounded-lg'><div className='m-4'>
                        <img src="https://www.appsquadz.com/img/tech-stacks/xamarine.png" alt="" />
                        <p className='text-center'>Xamarine</p>
                    </div></div>
                    <div className='flex justify-center items-center border-4 border-gray-300 shadow-lg rounded-lg'><div className='m-4'>
                        <img src="https://www.appsquadz.com/img/tech-stacks/flutter.png" alt="" />
                        <p className='text-center'>Google Flutter</p>
                    </div></div>
                </div>
            </div>

        </section>
    )
}

export default SectionTechno
