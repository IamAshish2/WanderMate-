import { useState } from "react";
import { users } from "../../db.json";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";

const UserProfile = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className=" flex flex-col h-[32rem] w-[95%] mr-auto ml-auto mb-10"
        >
          <div
            className="  h-full w-full rounded-md relative mb-14 "
            style={{
              backgroundImage: `url(${user.coverImage})`,
              backgroundSize: "cover",
              backgroundCover: "center",
            }}
          >
            <div className=" h-20 flex justify-evenly items-center absolute -bottom-11 md:w-[95%] md:justify-evenly lg:w-[99%] lg:justify-evenly">
              <img
                className="h-24 w-24 rounded-full ml-6 sm:mr-48 md:mr-56 lg:mr-[500px]"
                src={user.image}
                alt="user profile"
              />
              {/* () => {setClicked(!clicked)}*/}
              <button
                onClick={handleClick}
                className="border text-sm border-black rounded-full pl-4 pr-4 mt-10 ml-24 md:ml-24 hover:bg-black hover:text-white transition duration-150 ease-in-out"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="text-[12px]">
            <p className="font-bold ">{user.name}</p>
            <p className=" ">{user.bio}</p>
          </div>

          {/* edit profile section */}
          <div
            className={` h-screen w-full fixed top-2 p-4 mb-4 md:p-4 md:h-[90vh] md:mt-[63px] md:mb-[20px] md:w-[45%] md:mr-[100px]
             rounded-md z-50 text-white ${clicked ? "visible bg-black right-2" : "hidden"} `}
          >
            <motion.div 
            initial={{ x: open ? 1200 : 0 }}
            animate={{ x: open ? 0 : 600 }}
            transition={{ duration: 0.5, ease: 'easeInOut'  }}
            className="flex justify-between items-center p-2">
              <IoMdArrowBack
                onClick={handleClick}
                className="text-3xl ml-4 mt-2 "
              />
              <p className="text-white font-bold text-xl ">Edit profile</p>
              <button className=" bg-white text-black font-semibold  border pt-1 pb-1 pl-5 pr-5 rounded-full ">
                Save
              </button>
            </motion.div>

            <div
              className="  h-52 w-full rounded-md relative mb-10 "
              style={{
                backgroundImage: `url(${user.coverImage})`,
                backgroundSize: "cover",
                backgroundCover: "center",
                backgroundPosition:"fixed"
              }}
            >
          
              <div className="  h-20 w-full absolute -bottom-11 ">
                <img
                  className="h-20 w-20 rounded-full ml-6 sm:mr-48 md:mr-56 lg:mr-[500px]"
                  src={user.image}
                  alt="user profile"
                />
              </div>
            </div>

            <div className="flex flex-col h-auto p-2 w-[60%] ml-auto mr-auto">
              <input
                className="border mt-4  h-14 rounded-md placeholder:pl-2 "
                type="text"
                placeholder="Name"
              />
              <textarea
                className="border mt-4  h-28 rounded-md  placeholder:pl-2"
                name=""
                id=""
                placeholder="Bio"
              ></textarea>
              <input
                className="border mt-4  h-14 rounded-md  placeholder:pl-2"
                type="text"
                placeholder="Location"
              />
              <input
                className="border mt-4  h-14 rounded-md  placeholder:pl-2"
                type="text"
                placeholder="Occupation"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserProfile;
