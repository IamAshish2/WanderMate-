import Header from "../elements/Header"
import Footer from "../elements/Footer"
import { Outlet } from "react-router-dom"

const UserLayout = () => {
  return (
    <>
        <div className=' flex flex-col p-1 h-100vh w-80%' style={{
        backgroundColor:"whitesmoke",}}>
                {/* <Header/> */}
                <Outlet/>
                <Footer/>
        </div>
       
    </>
  )
}

export default UserLayout
