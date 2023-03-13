import React from 'react'

const SectionFour = () => {
    const myStyle = {
        backgroundImage: "url('	https://www.appsquadz.com/img/pages/made_easy_prime/made-easy.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '1px solid #fff',
        height: "300px",
        width: "50%",
    }
    const myStyle2 = {
        backgroundImage: "url('	https://www.appsquadz.com/img/pages/cp_casestudy/banner.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '1px solid #fff',
        height: "300px",
        width: "50%",
    }
    const myStyle3 = {
        backgroundImage: "url('	https://www.appsquadz.com/assets/img/innerechef.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '1px solid #fff',
        height: "300px",
        width: "50%",
    }
    const myStyle4 = {
        backgroundImage: "url('	https://www.appsquadz.com/assets/img/taxi1.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '1px solid #fff',
        height: "300px",
        width: "50%",
    }
    const myStyle5 = {
        backgroundImage: "url('	https://www.appsquadz.com/assets/img/educa.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '1px solid #fff',
        height: "300px",
        width: "50%",
    }
    const myStyle6 = {
        backgroundImage: "url('https://www.appsquadz.com/assets/img/bihar.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '1px solid #fff',
        height: "300px",
        width: "50%",
    }
    return (
        <section  >
            <div className=' flex'>
                <div className='flex flex-col  items-center justify-center text-white h-[300px]' style={myStyle}>
                    <h3 className='text-[45px] '>Made Easy Prime</h3>
                    <p className='text-[30px] mb-8'>eLearning Application</p>
                    <div>
                        <button className='border rounded-full text-[15px] tracking-widest px-[32px] py-[18px] font-light bg-[#1866b144]'>OPEN CASE STUDY</button>
                    </div>
                </div>
                <div className='flex flex-col  items-center justify-center text-white  h-[300px]' style={myStyle2}>
                    <h3 className='text-[45px] '>eCareer Point</h3>
                    <p className='text-[30px] mb-8'>eLearning Application</p>
                    <div>
                        <button className='border rounded-full text-[15px] tracking-widest px-[32px] py-[18px] font-light bg-[#1866b144]'>OPEN CASE STUDY</button>
                    </div>
                </div>
            </div>
            <div className=' flex'>
                <div className='flex flex-col  items-center justify-center text-white  h-[300px]' style={myStyle3}>
                    <h3 className='text-[45px] '>Innerchef</h3>
                    <p className='text-[30px] mb-8'>Online Food Ordering Application</p>
                    <div>
                        <button className='border rounded-full text-[15px] tracking-widest px-[32px] py-[18px] font-light bg-[#1866b144]'>OPEN CASE STUDY</button>
                    </div>
                </div>
                <div className='flex flex-col  items-center justify-center text-white  h-[300px]' style={myStyle4}>
                    <h3 className='text-[45px] '>Taxi For Sure</h3>
                    <p className='text-[30px] mb-8'>Acquired by OLA in $200 Million</p>
                    <div>
                        <button className='border rounded-full text-[15px] tracking-widest px-[32px] py-[18px] font-light bg-[#1866b144]'>OPEN CASE STUDY</button>
                    </div>
                </div>
            </div>
            <div className=' flex'>
                <div className='flex flex-col  items-center justify-center text-white  h-[300px]' style={myStyle5}>
                    <h3 className='text-[45px] '>Chalklit</h3>
                    <p className='text-[30px] mb-8'>eLearning Application for Teachers</p>
                    <div>
                        <button className='border rounded-full text-[15px] tracking-widest px-[32px] py-[18px] font-light bg-[#1866b144]'>OPEN CASE STUDY</button>
                    </div>
                </div>
                <div className='flex flex-col  items-center justify-center text-white  h-[300px]' style={myStyle6}>
                    <h3 className='text-[45px] '>Taste Of Bihar</h3>
                    <p className='text-[30px] mb-8'>An NFC Enabled App</p>
                    <div>
                        <button className='border rounded-full text-[15px] tracking-widest px-[32px] py-[18px] font-light bg-[#1866b144]'>OPEN CASE STUDY</button>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default SectionFour
