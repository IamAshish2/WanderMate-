import { useEffect, useState } from "react";

const Carousel = ({ data }) => {
  const [itemId, setItemId] = useState(1);
  const [seeMore,setSeeMore] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setItemId((prevItemId) => {
  //       const nextItemId = prevItemId + 1;
  //       return nextItemId > data.length ? 1 : nextItemId;
  //     })
  //   },3000)

  //   return () =>  clearInterval(interval)
  // },[data.length])

  useEffect(() => {
    const interval  = setInterval(() => {
        if(itemId < 5){
            setItemId((prev) => prev + 1)
        }else{
          setItemId(1);
        }
    },5000)

    return () => clearInterval(interval);
  },[itemId])
    
  return (
    //container
    <div className="  flex flex-col  md:w-[86%] ml-auto mr-auto border shadow-lg rounded-2xl p-4" style={{
      backgroundColor:"whitesmoke"
    }}>
      {/* images */}
      {data
        .filter((item) => item.id === itemId)
        .map((item) => (
          <div  className="h-[40vh] w-full md:h-[60vh] md:w-[90%] ml-auto mr-auto " key={item.id}>
            <img
              className="h-full object-cover w-full rounded-lg relative"
              src={item.img}
              alt="image"
            />
            {/* <h1 className="">Explore {item.title}</h1> */}
          </div>
        ))}

      {/* buttons */}
      <div className="flex h-[7vh] w-full justify-center items-center gap-4">
        {data.map((item) => (
          <div
            onClick={() => {
              setItemId(item.id);
            }}
            key={item.id}
            className={`h-4 w-4 cursor-pointer rounded-full border border-yellow-500 hover:bg-yellow-500
              ${item.id === itemId && "bg-yellow-500"}`}
          ></div>
        ))}
      </div>

      {/* description */}
      <div className="w-full">
        {data
          .filter((item) => item.id === itemId)
          .map((item) => (
            <div className="w-[90%] ml-auto mr-auto " key={item.id}>
              <p className={`${seeMore ? "line-clamp-none" : "line-clamp-4"} w-[95%] ml-auto mr-auto`}>{item.desc}</p>
              <button className="font-semibold text-blue-500 ml-[80%] md:ml-[90%] " onClick={() => {
                 setSeeMore(!seeMore)
              }}>{`${seeMore ? "see less" : "see more"}`}</button>
            </div>
          ))}
      </div>

      
    </div>
  );
};

export default Carousel;
