import img1 from '../../../assets/image1/banner.webp';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FaInstagram, FaLocationArrow } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
  
const Banner = () => {
    return (
        <div className="hero py-20 bg-gradient-to-r from-pink-500 to-yellow-500">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className='w-full m:w-0'>
                    <img style={{height:'350px'}} src={img1} className="rounded-lg shadow-2xl animate-pulse" />
                </div>
                <div className='w-full m:w-0'>
                    <h1 className="text-5xl font-bold text-white">POS & Inventory Management Admin Dashboard <Typewriter
                        words={['Template']}
                        loop={1000}
                        cursor
                        cursorStyle='!'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /> </h1>
                    <p className="py-6 text-white w-full">A point of sale admin template can help organize and track inventory in a business. The template includes fields for items, quantities, prices, and descriptions.</p>
                    <div className='space-x-2'>
                        <AwesomeButton type="instagram" before={<FaInstagram size={25} />}>Buy Products</AwesomeButton>
                        <AwesomeButton type="primary" before={<FaLocationArrow size={25} />}>Live Preview</AwesomeButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;