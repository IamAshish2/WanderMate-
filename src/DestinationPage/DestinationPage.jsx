import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestination } from "../API";
import Tempelate from "../Tempelate/Tempelate";

const DestinationPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      const response = await getDestination(id);
      // console.log(response);
      setData(response);
      // console.log(data);
    };
    fetchDestination();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return <Tempelate data={data} />;
};

export default DestinationPage;
