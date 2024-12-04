'use server'
import Dashboard_navbar from "../../component/layouts/dashboard-navbar";
import Footer from "../../component/layouts/footer";
import HeaderAuth from "../../component/layouts/header";
import { getDataUser } from "@/app/services/UserServices";
import Profile from "./fragment/content";
const renderDisplay = async () => {
  const data = await getDataUser()
  
  return (
    <div className="">
      <HeaderAuth />
      <div className="flex md:flex-row flex-col">
        <Dashboard_navbar />
        <Profile data={data}/>
      </div>
      <Footer />
    </div>
  )
}

export default renderDisplay;