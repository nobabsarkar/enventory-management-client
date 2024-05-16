import heloCenter from '../../../assets/image1/heloCenter.jpg'
import { FaCheck } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <div className="hero shadow-md mt-10 bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-5/6 relative'>
                    <div className='flex items-center bg-gradient-to-r from-indigo-400  text-white w-[200px] absolute right-10 bottom-10'>
                        <FaEarthAmericas className='mr-3 text-white ml-5 ' size={35} />
                        <div className='py-7'>
                            <h1 className='text-2xl text-white font-bold'>1,485 +</h1>
                            <p className='text-white font-bold'>Trusted Clients</p>
                        </div>
                    </div>
                    <img src={heloCenter} className="rounded-lg shadow-2xl " />
                </div>
                <div>
                    <div className='w-[120px]'>
                        <h2 className='text-2xl text-red-500 font-bold mb-5 border-b-2 border-red-500  border-b-4'>About Us</h2>
                    </div>
                    <h1 className="text-2xl lg:text-4xl font-bold">We Are The Best Call Center Service For Your Customer.</h1>
                    <p className="py-6 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        <div>
                            <p className='flex items-center mb-4 font-bold'><FaCheck className='bg-red-500 p-1 rounded-full mr-2 text-white' size={25} /> 24/7 Customer Support</p>
                            <p>Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
                        </div>
                        <div>
                            <p className='flex items-center mb-4 font-bold'><FaCheck className='bg-red-500 p-1 rounded-full mr-2 text-white' size={25} /> Delivery Report</p>
                            <p>Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className=''>
                        <p className='mt-10'>
                            <div className='flex justify-between'>
                                <span>Cominication</span>
                                <p>90%</p>
                            </div>
                            <progress className="progress progress-error " value="90" max="100">90%</progress>
                        </p>
                        <p className='mt-8'>
                            <div className='flex justify-between'>
                                <span>Chat Support</span>
                                <p>80%</p>
                            </div>
                            <progress className="progress progress-error" value="80" max="100"></progress>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white'>More About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;