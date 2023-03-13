import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { GrFacebookOption } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { ImLinkedin2 } from "react-icons/im"
import { RiWhatsappFill } from "react-icons/ri"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="bg-[#062b44] text-slate-200 py-8 text-base">
            <div className='flex justify-center items-center m-4'>
                <div>
                    <ul className='flex px-5'>
                        <li className='p-2 text-3xl bg-[#4267B2] rounded-full m-2'><GrFacebookOption/></li>
                        <li className='p-2 text-3xl bg-[#26a7de] rounded-full m-2'><GrTwitter/></li>
                        <li className='p-2 text-3xl bg-[#0A66C2] rounded-full m-2'><ImLinkedin2/></li>
                        <li className='p-2 text-3xl bg-[#25D366] rounded-full m-2'><RiWhatsappFill/></li>
                        <li className='p-2 text-3xl bg-[#fd5949] rounded-full m-2'><AiFillInstagram/></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center text-center border-x-2 px-5 '><p>Copyright © 2023 AppSquadz Software Pvt. Ltd.<br/>
                    All Rights Reserved.<br/>
                   <span className='text-sm text-slate-400'> Privacy Policy | Terms & Conditions | Sitemap</span></p></div>
                <div className='flex h-16 px-5'>
                    <img src="https://www.appsquadz.com/img/icons/sitelock.webp" alt="" />
                    <img src="https://images.dmca.com/Badges/dmca_protected_24_120.png?ID=428ed429-636a-4445-bfbc-07f9965799c1" alt="" />
                    <img src="	https://www.appsquadz.com/img/icons/gdpr-logo.webp" alt="" />
                </div>
            </div>
            <div className="container justify-center mx-auto flex flex-col md:flex-row  items-center">
                <div className="flex justify-center items-center mt-4 md:mt-0">
                    <ul className='flex mx-2 text-yellow-500 text-lg'>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                    </ul>
                    <p className='tracking-widest'>Overall clients rating is 4.9 out of 5.0 for AppSquadz by 2198 Clients/Users</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
