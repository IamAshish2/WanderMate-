import React, { useEffect, useState } from 'react'
import { getHotel } from '../API'

const HotelPage = () => {
    
    const [hotel,setHotel] = useState([])
    useEffect(() => {
        const fetchHotel = async() => {
            const data = await getHotel()
            setHotel(data)
        }
        fetchHotel()
    },[])


  return (
    <p>heihe</p>
  )
}

export default HotelPage
