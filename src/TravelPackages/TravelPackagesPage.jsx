import React, { useEffect, useState } from 'react'
import { getTravelPackage } from '../API';
import { useParams } from 'react-router-dom';
import Tempelate from '../InsidePage/Tempelate';

const TravelPackages = () => {
  const {id} = useParams();
  const [data,setData] = useState(null);

  useEffect(() => {
    const fetchTravel = async() => {
      const response = await getTravelPackage(id);
      setData(response);
    }
    fetchTravel();
  },[id]);

  if (!data) return <div>Loading...</div>;


  return (
    <div>
      <Tempelate data={data}/>
    </div>
  )
}

export default TravelPackages
