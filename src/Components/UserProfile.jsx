import profileImg from "../assets/batman.jpg";
import coverImg from "../assets/bg5.jpg";
import { users } from "../../db.json";
const UserProfile = () => {
  return (
    <>
      {users.map((user) => (
        <div 
          key={user.id}
          className=" flex flex-col h-96 w-[90%] mr-auto ml-auto mb-10"
        >
          <div
            className="  h-80 w-full rounded-md relative mb-14 "
            style={{
              backgroundImage: `url(${user.coverImage})`,
              backgroundSize:"cover",
              backgroundCover:"center"
            }}
          >
            <div className=" h-20 flex justify-evenly items-center absolute -bottom-11 md:w-[95%] md:justify-evenly lg:w-[99%] lg:justify-evenly" >  
              <img
                className="h-24 w-24 rounded-full ml-6 sm:mr-48 md:mr-56 lg:mr-[500px]"//-ml-16  md:mr-80 lg:mr-96 md:w-[80%] lg:w-[100%] mr-48
                src={user.image}
                alt="user profile"
              />
             <button className="border text-sm border-black rounded-full pl-4 pr-4 mt-10 ml-24 md:ml-24 hover:bg-black hover:text-white transition duration-150 ease-in-out">
              Edit Profile
            </button>

            </div>

          </div>

          <div className="text-[12px]   ">
            <p className="font-bold ">{user.name}</p>
            <p className=" ">{user.bio}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserProfile;
