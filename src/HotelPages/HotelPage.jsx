import React, { useEffect, useState } from "react";
import { getHotel } from "../API";
import { useParams } from "react-router-dom";
import Tempelate from "../Tempelate/Tempelate";

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const response = await getHotel(id);
      setHotel(response);
    };
    fetchHotel();
  }, [id]);

  if (!hotel) return <div>loading...</div>;
  return <Tempelate data={hotel} />;
};

export default HotelPage;
