
import axios from "axios";
import { json } from "react-router-dom";

const jsonUrl = "http://localhost:3000"

export const getHotels = async() =>  {
    try{
        const response = await axios.get(`${jsonUrl}/hotels`)
        const data = await response.data
        return data
    }catch(err){
        console.log(err)
    }
}


export const getHotel = async(id) => {
    try{
        const response = await axios.get(`${jsonUrl}/hotels/${id}`)
        const data = await response.data
        return data
    }catch(err){
        console.log(err)
    }
}

export const getTravelPackages = async() => {
    try{
        const response = await axios.get(`${jsonUrl}/travelPackages`)
        const data =await response.data
        return data
    }catch(err){
        console.log(err)
    }
}

export const getTravelPackage = async(id) => {
    try{
        const response = await axios.get(`${jsonUrl}/travelPackages/${id}`)
        const data =await response.data
        return data
    }catch(err){
        console.log(err)
    }
}

export const getDestination = async(id) => {
    try{
    const response = await axios.get(`${jsonUrl}/topDestinations/${id}`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getTopDestinations = async() => {
    try{
    const response = await axios.get(`${jsonUrl}/topDestinations`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getThingsToDo = async() => {
    try{
    const response = await axios.get(`${jsonUrl}/thingsToDo`)
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
    const response = await axios.get(`${jsonUrl}/reviews/${hotelId}`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getUsers = async() => {
    try{
    const response = await axios.get(`${jsonUrl}/users`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}

export const getUser = async(userId) => {
    try{
    const response = await axios.get(`${jsonUrl}/users/${userId}`)
    const data = await response.data
    return data
    }catch(err){
        console.log(err)
    }
}
