
import axios from "axios";
import { json } from "react-router-dom";

const jsonUrl = "http://localhost:5156"

export const getHotels = async() =>  {
    try{
        const token = localStorage.getItem("token");
        let response;
        if (token) {
          response = await axios.get(`${jsonUrl}/api/Hotel`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        const data = await response.data
        return data
    }catch(err){
        console.log(err)
    }
}


export const getHotel = async(id) => {
    try{
        const token = localStorage.getItem("token");
        let response;
        if (token) {
          response = await axios.get(`${jsonUrl}/api/Hotel/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        // const response = await axios.get(`${jsonUrl}/hotels/${id}`)
        const data = await response.data
        console.log(data);
        return data
    }catch(err){
        console.log(err)
    }
}

export const getTravelPackages = async() => {
    try{
        // const response = await axios.get(`${jsonUrl}/api/TravelPackages`)
        const token = localStorage.getItem("token");
        let response;
        if (token) {
          response = await axios.get(`${jsonUrl}/api/TravelPackages`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        const data =await response.data

        return data
    }catch(err){
        console.log(err)
    }
}

//http://localhost:5156/api/TravelPackages
export const getTravelPackage = async(id) => {
    try{
        // const response = await axios.get(`${jsonUrl}/api/TravelPackages/${id}`)
        const token = localStorage.getItem("token");
        let response;
        if (token) {
          response = await axios.get(`${jsonUrl}/api/TravelPackages/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        const data =await response.data
        return data
    }catch(err){
        console.log(err)
    }
}

export const getDestination = async(id) => {
    try{
        const token = localStorage.getItem("token");
        let response;
        if (token) {
          response = await axios.get(`${jsonUrl}/api/Destinations/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
    // const response = await axios.get(`${jsonUrl}`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getTopDestinations = async() => {
    try{
        const token = localStorage.getItem("token");
        let response;
        if (token) {
          response = await axios.get(`${jsonUrl}/api/Destinations`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getThingsToDo = async() => {
    try{
        const token = localStorage.getItem("token");
        let response;
        if (token) {
          response = await axios.get(`${jsonUrl}/api/thingsToDo`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
    // const response = await axios.get(`${jsonUrl}/thingsToDo`)
    const data =await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getReviews = async() => {
    try{
    const response = await axios.get(`${jsonUrl}/reviews`)
    const data =await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getReview = async(hotelId) => {
    try{
    const response = await axios.get(`${jsonUrl}/reviews/?hotelId=${hotelId}`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getUsers = async() => {
    try{
    const response = await axios.get(`${jsonUrl}/api/User`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getUser = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const id = await axios.matchToken(token);
        console.log(id);
        const response = await axios.get(`${jsonUrl}/api/User/${id}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.error('Error fetching user:', err.response ? err.response.data : err.message);
        throw err; // Optionally rethrow the error if you need to handle it further up
    }
}

