import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import OurTeam1 from '../../../assets/image1/ourTeam1.avif'
import OurTeam2 from '../../../assets/image1/ourTeam2.jpg'
import OurTeam3 from '../../../assets/image1/ourTeam3.avif'

const OurTeam = () => {
    return (
        <div className="my-20">
            <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Our Strong Team Member</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={OurTeam1} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title flex justify-center">Jack Jonson</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, numquam?</p>
                        <div className='flex items-center justify-center space-x-5'>
                            <FaFacebook className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaFacebook>
                            <FaLinkedin className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaLinkedin>
                            <FaWhatsapp className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaWhatsapp>
                            <FaTwitter className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaTwitter>
                        </div> 
                        <div className="card-actions justify-start w-full mt-3">
                            <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white w-full'>View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={OurTeam2} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title flex justify-center">Harry Ramous</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae!</p>
                        <div className='flex items-center justify-center space-x-5'>
                            <FaFacebook className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaFacebook>
                            <FaLinkedin className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaLinkedin>
                            <FaWhatsapp className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaWhatsapp>
                            <FaTwitter className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaTwitter>
                        </div> 
                        <div className="card-actions justify-start w-full mt-3">
                            <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white w-full'>View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={OurTeam3} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title flex justify-center">James Bond</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, pariatur!</p>
                        <div className='flex items-center justify-center space-x-5'>
                            <FaFacebook className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaFacebook>
                            <FaLinkedin className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaLinkedin>
                            <FaWhatsapp className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaWhatsapp>
                            <FaTwitter className='bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer' size={25}></FaTwitter>
                        </div> 
                        <div className="card-actions justify-start w-full mt-3">
                            <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white w-full'>View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;