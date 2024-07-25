import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { adminSidebar } from '../helper-links/Data';

const DashBoardSideLayout = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-[25%]'>


            {/* SideBar */}
            <motion.div
                initial={{ x:  600  }}
                animate={{ x:  0  }}
                transition={{ duration: 0.3 }}
                className="h-screen sticky flex flex-col flex-1 bg-blue-600 rounded-none"
            >
                            <RxHamburgerMenu
        size={30}
        color="black"
        className="cursor-pointer block md:hidden"
        onClick={() => {    
          setOpen(!open);
        }}
      />
                <h1 className='font-bold text-4xl mt-3 ml-3 mb-10 hidden md:block cursor-pointer'>
                    WanderMate
                </h1>
                {adminSidebar.map((links) => (
                    <Link
                        key={links.id}
                        className=" text-xl text-black p-4 font-bold hover:bg-blue-300 hidden md:block hover:text-white cursor-pointer"
                        to={links.to}
                    >
                        {links.name}
                    </Link>
                ))}
            </motion.div>
        </div>
    )
}

export default DashBoardSideLayout