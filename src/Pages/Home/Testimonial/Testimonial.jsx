import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import testimonial1 from '../../../assets/image1/testimonial1.png'
import testimonial2 from '../../../assets/image1/testimonial2.jpg'
import testimonial3 from '../../../assets/image1/testimonial3.png'


const Testimonial = () => {
    return (
        <div className='bg-slate-200 mt-10 py-10'>
            <h1 className='flex justify-center text-3xl mb-10 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'>What People Are Saying About Us</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <div className='my-10'>
                    <SwiperSlide className='' style={{ width: '400px' }}>
                        <div className='bg-white py-10 space-x-3 rounded-lg'>
                            <div className='flex my-5 justify-center space-x-2 text-yellow-400'>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                            </div>
                            <p className='my-5 text-center px-5'>Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                            <div className='flex items-center space-x-2 my-5 justify-center'>
                                <img style={{width:'70px', height:'70px', borderRadius:'100%', border:'3px solid orange'}} src={testimonial1} alt="" />
                                <h2 className='text-2xl font-bold'>Harris Johnson</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='' style={{ width: '400px' }}>
                        <div className='bg-white py-10 space-x-3 rounded-lg'>
                            <div className='flex my-5 justify-center space-x-2 text-yellow-400'>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                            </div>
                            <p className='my-5 text-center px-5'>Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                            <div className='flex items-center space-x-2 my-5 justify-center'>
                                <img style={{width:'70px', height:'70px', borderRadius:'100%', border:'3px solid orange'}} src={testimonial3} alt="" />
                                <h2 className='text-2xl font-bold'>James Rabbin</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='' style={{ width: '400px' }}>
                        <div className='bg-white py-10 space-x-3 rounded-lg'>
                            <div className='flex my-5 justify-center space-x-2 text-yellow-400'>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                            </div>
                            <p className='my-5 text-center px-5'>Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                            <div className='flex items-center space-x-2 my-5 justify-center'>
                                <img style={{width:'70px', height:'70px', borderRadius:'100%', border:'3px solid orange'}} src={testimonial2} alt="" />
                                <h2 className='text-2xl font-bold'>Durso Raeen</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='' style={{ width: '400px' }}>
                        <div className='bg-white py-10 space-x-3 rounded-lg'>
                            <div className='flex my-5 justify-center space-x-2 text-yellow-400'>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                            </div>
                            <p className='my-5 text-center px-5'>Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                            <div className='flex items-center space-x-2 my-5 justify-center'>
                                <img style={{width:'70px', height:'70px', borderRadius:'100%', border:'3px solid orange'}} src={testimonial1} alt="" />
                                <h2 className='text-2xl font-bold'>Harris Johnson</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='' style={{ width: '400px' }}>
                        <div className='bg-white py-10 space-x-3 rounded-lg'>
                            <div className='flex my-5 justify-center space-x-2 text-yellow-400'>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                                <FaStar size={25}/>
                            </div>
                            <p className='my-5 text-center px-5'>Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                            <div className='flex items-center space-x-2 my-5 justify-center'>
                                <img style={{width:'70px', height:'70px', borderRadius:'100%', border:'3px solid orange'}} src={testimonial1} alt="" />
                                <h2 className='text-2xl font-bold'>Harris Johnson</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
                <div className='flex justify-center mt-8'>
                    <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white'><FaStar className='text-yellow-400' size={25}/> Read More Reviews</button>
                </div>
        </div >
    );
};

export default Testimonial;