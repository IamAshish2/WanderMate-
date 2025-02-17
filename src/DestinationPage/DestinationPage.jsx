import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestination } from "../API";
import Tempelate from "../Tempelate/Tempelate";
import { destination } from "../helper-links/Data";

const DestinationPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      const response = await getDestination(id);
      setData(response);
    };
    fetchDestination();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return <Tempelate data={data} />;
};

export default DestinationPage;
