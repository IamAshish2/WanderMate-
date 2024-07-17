import SimpleImageSlider from "react-simple-image-slider";
import { destination,topDestinations,travelPackages,hotels } from "../helper-links/Data";
import topDestinationImg from "../assets/img7.jpg"
import hotelIMg from "../assets/img10.jpg"
import travelPackgesImg from "../assets/img9.jpg"
import Cards from '../elements/Card';


const Destination = ({data}) => {

  return (
    <>
       <div className='flex flex-col mt-14 w-[85%] ml-auto m-auto'>
                <div>
                    <div className='flex align-center gap-2'>
                        <img src={topDestinationImg} alt="top destination img" 
                            className=' rounded-full h-10 w-10' />
                        <p className='font-bold mt-1 text-md '>Top Destinations</p>
                    </div>
                    <Cards data={topDestinations}  />
                </div>

                    <div className='mt-10'>
                        <div className='flex align-center gap-2'>
                            <img src={travelPackgesImg} alt="top destination img" 
                                className=' rounded-full h-10 w-10' />
                            <p className='font-bold mt-1 text-md '>Travel Packages</p>
                        </div>
                        <Cards data={travelPackages}  />
                    </div>

                    <div className='mt-10'>
                        <div className='flex align-center gap-2'>
                            <img src={hotelIMg} alt="top destination img" 
                                className=' rounded-full h-10 w-10' />
                            <p className='font-bold mt-1 text-md '>Hotels</p>
                        </div>
                        <Cards data={hotels}  />
                    </div>
            </div>
    </>
  );
};

export default Destination;
