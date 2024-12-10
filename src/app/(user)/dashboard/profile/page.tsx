'use server'
import Dashboard_navbar from "@/components/layouts/dashboard-navbar";
import Footer from "@/components/layouts/footer";
import HeaderAuth from "@/components/layouts/AuthHeader";
import { getDataUser } from "@/services/UserServices";
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