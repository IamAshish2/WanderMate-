import { useState, useEffect } from "react";
import bgCover from "../assets/cover.jpg";
import userProfile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { getUserEmailByToken, getUserByEmail } from "../API";
import axios from "axios";

const UserProfile = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");

  const [user, setUser] = useState([]);
  const [clicked, setClicked] = useState(false);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    const email = await getUserEmailByToken(token);
    const user = await getUserByEmail(email);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();

    // Add/remove body class to disable/enable scrolling
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [clicked]);

  const handleEdit = (user) => {
    setId(user.id);
    setName(user.userName);
    // setEmail(user.email);
    setBio(user.bio);
    setLocation(user.location);
    setOccupation(user.occupation);
  };

  const handleSubmit = () => {
    const userData = {
      UserName: name,
      Occupation: occupation,
      Bio: bio,
      Location: location,
    };

    const updateData = async () => {
      try {
        const response = await axios.put(
          `http://localhost:5156/api/User/${id}`,
          userData
        );
        fetchUser();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    updateData();
  };

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <div
        key={user.id}
        className="flex flex-col h-[32rem] w-[95%] mr-auto ml-auto mb-10"
      >
        <div
          className="h-80 lg:h-full w-full rounded-md relative mb-14"
          style={{
            backgroundImage: `url(${bgCover})`,
            backgroundSize: "cover",
            backgroundCover: "top",
          }}
        >
          <div className="h-20 flex justify-evenly items-center absolute -bottom-11 md:w-[95%] md:justify-evenly lg:w-[99%] lg:justify-evenly">
            <img
              className="h-24 w-24 rounded-full ml-6 sm:mr-48 md:mr-56 lg:mr-[500px]"
              src={userProfile}
              alt="user profile"
            />
            <button
              onClick={() => {
                setClicked(!clicked);
                handleEdit(user);
              }}
              className="border text-sm border-black rounded-full pl-4 pr-4 mt-10 ml-36 md:ml-24 hover:bg-black hover:text-white transition duration-150 ease-in-out"
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="text-[12px] text-xl ml-8 md:ml-28 lg:ml-60 capitalize font-mono font-light">
          <p className="font-semibold ml-1">{user.userName}</p>
          <p>
            <span> Bio:</span> {user.bio}
          </p>
          <p>
            <span>Occupation:</span> {user.occupation}
          </p>
          <p>
            <span>Location:</span> {user.location}
          </p>
        </div>

        {/* edit profile section */}
        {clicked && (
          <form
            // onSubmit={(e) => handleSubmit(e)}
            className={`h-screen w-full fixed top-2 p-4 mb-4 md:p-4 md:h-[90vh] md:mt-[63px] md:mb-[20px] md:w-[45%] md:mr-[100px] rounded-md z-50 text-white bg-black right-2 overflow-y-scroll`}
          >
            {/*  */}
            <motion.div
              initial={{ x: clicked ? 1200 : 0 }}
              animate={{ x: clicked ? 0 : 600 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex justify-between items-center p-2"
            >
              <IoMdArrowBack
                onClick={() => {
                  setClicked(!clicked);
                }}
                className="text-3xl ml-4 mt-1 text-white"
              />
              <p className="text-white font-bold text-xl">Edit profile</p>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                // type="submit"
                className="bg-white text-black font-semibold border pt-1 pb-1 pl-5 pr-5 rounded-full"
              >
                Save
              </button>
            </motion.div>

            <div
              className="h-52 mt-5 w-full rounded-md relative mb-10"
              style={{
                backgroundImage: `url(${userProfile})`,
                backgroundSize: "cover",
                backgroundCover: "center",
                backgroundPosition: "fixed",
              }}
            >
              <div className="h-20 w-full absolute -bottom-2">
                <img
                  className="h-32 w-32 rounded-full ml-16 sm:mr-48 md:mr-56 lg:mr-[500px]"
                  src={userProfile}
                  alt="user profile"
                />
              </div>
            </div>

            <div
              className={`flex flex-col h-auto p-2 w-[70%] ml-auto mr-auto text-black`}
            >
              <input
                className="border mt-4 h-14 rounded-md placeholder:pl-2"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {/* <input
                className="border mt-4 h-14 rounded-md placeholder:pl-2"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              /> */}
              <textarea
                className="border mt-4 h-28 rounded-md placeholder:pl-2"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
              <input
                className="border mt-4 h-14 rounded-md placeholder:pl-2"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
              <input
                className="border mt-4 h-14 rounded-md placeholder:pl-2"
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="Occupation"
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default UserProfile;
