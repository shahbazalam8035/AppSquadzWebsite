import React from 'react'
import awsImg from "../assets/sectionTwoImages/aws-img/aws.png";
import awsEleImg from "../assets/sectionTwoImages/aws-ele-img/aws-ele.jpg";
import ottImg from "../assets/sectionTwoImages/ott-img/ott.png";
import iotImg from "../assets/sectionTwoImages/iot-img/iot.png";
import driveImg from "../assets/sectionTwoImages/drive-img/drive.png";
import sdImg from "../assets/sectionTwoImages/sd-img/sd.png";


const TabBar = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap bg-[#eff8ff]">
                <div className="w-full mx-16 mt-4">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-4"
                        role="tablist"
                    >
                        <li className="-mb-px  last:mr-0 flex-auto text-center border-b-2">
                            <a
                                className={
                                    "text-base font-bold uppercase px-5 py-3  rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-slate-900"
                                        : "text-slate-800 ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Technologies
                            </a>
                        </li>
                        <li className="-mb-px last:mr-0 flex-auto text-center border-b-2">
                            <a
                                className={
                                    "text-base font-bold uppercase px-5 py-3 rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-slate-900"
                                        : "text-slate-800 ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Product
                            </a>
                        </li>
                        <li className="-mb-px last:mr-0 flex-auto text-center border-b-2">
                            <a
                                className={
                                    "text-base font-bold uppercase px-5 py-3  rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-slate-900"
                                        : "text-slate-800 ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Services
                            </a>
                        </li>
                        <li className="-mb-px last:mr-0 flex-auto text-center border-b-2">
                            <a
                                className={
                                    "text-base font-bold uppercase px-5 py-3 rounded block leading-normal " +
                                    (openTab === 4
                                        ? "text-white bg-slate-900"
                                        : "text-slate-800 ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                Services
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="grid grid-cols-3 gap-4 content-center ">
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={awsEleImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    AWS Elemental Live L812AE
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Ensuring flawless streaming, we employ
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        AWS Elemental link
                                                    </span>
                                                    to assist in live streaming...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={ottImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">OTT Platform</h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We have experts to build your
                                                    <span className="text-blue-400 text-[17px]"> OTT platform</span>
                                                    to secure your media streaming and provide a safer experience...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={iotImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    IoT Development
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        IoT development{" "}
                                                    </span>
                                                    is the process of developing tremendous digital applications
                                                    with hassle-free control..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={driveImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    Google Drive Solution
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We safeguard and manage your precious data with our{" "}
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        Google drive solutions
                                                    </span>
                                                    ...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={sdImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    SD Card Solution
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Create a notable impact with our
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        SD card solution
                                                    </span>
                                                    and give a digital platform to our SD card service...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="grid grid-cols-3 gap-4 content-center ">
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={ottImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">OTT Platform</h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We have experts to build your
                                                    <span className="text-blue-400 text-[17px]"> OTT platform</span>
                                                    to secure your media streaming and provide a safer experience...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={iotImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    IoT Development
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        IoT development{" "}
                                                    </span>
                                                    is the process of developing tremendous digital applications
                                                    with hassle-free control..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={driveImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    Google Drive Solution
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We safeguard and manage your precious data with our{" "}
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        Google drive solutions
                                                    </span>
                                                    ...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={sdImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    SD Card Solution
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Create a notable impact with our
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        SD card solution
                                                    </span>
                                                    and give a digital platform to our SD card service...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="grid grid-cols-3 gap-4 content-center ">
                                    <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={iotImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    IoT Development
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        IoT development{" "}
                                                    </span>
                                                    is the process of developing tremendous digital applications
                                                    with hassle-free control..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={driveImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    Google Drive Solution
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We safeguard and manage your precious data with our{" "}
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        Google drive solutions
                                                    </span>
                                                    ...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={sdImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    SD Card Solution
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Create a notable impact with our
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        SD card solution
                                                    </span>
                                                    and give a digital platform to our SD card service...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={awsImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">AWS MediaLive</h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Being an{" "}
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        AWS advanced consulting partner
                                                    </span>
                                                    , AppSquadz offers video solutions for delivering video content
                                                    flawlessly..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={awsEleImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    AWS Elemental Live L812AE
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Ensuring flawless streaming, we employ
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        AWS Elemental link
                                                    </span>
                                                    to assist in live streaming...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={ottImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">OTT Platform</h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We have experts to build your
                                                    <span className="text-blue-400 text-[17px]"> OTT platform</span>
                                                    to secure your media streaming and provide a safer experience...
                                                </p>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <div className="grid grid-cols-3 gap-4 content-center ">
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={awsImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">AWS MediaLive</h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Being an{" "}
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        AWS advanced consulting partner
                                                    </span>
                                                    , AppSquadz offers video solutions for delivering video content
                                                    flawlessly..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={awsEleImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    AWS Elemental Live L812AE
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    Ensuring flawless streaming, we employ
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        AWS Elemental link
                                                    </span>
                                                    to assist in live streaming...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={ottImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">OTT Platform</h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We have experts to build your
                                                    <span className="text-blue-400 text-[17px]"> OTT platform</span>
                                                    to secure your media streaming and provide a safer experience...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={iotImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    IoT Development
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        IoT development{" "}
                                                    </span>
                                                    is the process of developing tremendous digital applications
                                                    with hassle-free control..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-md px-[10px] py-[20px] border-4 shadow-lg h-[175px]">
                                            <div className="">
                                                <img className="w-52" src={driveImg} alt="" />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg  text-left font-medium ">
                                                    Google Drive Solution
                                                </h3>
                                                <p className="text-sm my-1 font-normal ">
                                                    We safeguard and manage your precious data with our{" "}
                                                    <span className="text-blue-400 text-[17px]">
                                                        {" "}
                                                        Google drive solutions
                                                    </span>
                                                    ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabBar
