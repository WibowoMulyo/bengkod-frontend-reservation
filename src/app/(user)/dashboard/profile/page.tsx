'use server'
import Dashboard_navbar from "@/components/layouts/navbar/dashboard-navbar";
import Footer from "@/components/layouts/footer";
import HeaderAuth from "@/components/layouts/header/AuthHeader";
import Profile from "./fragment/content";
import { getServerSession } from "next-auth";
import { authOption } from "../../../../lib/auth";
const renderDisplay = async () => {
  const session = await getServerSession(authOption);
  return (
    <div className="">
      <HeaderAuth />
      <div className="flex md:flex-row flex-col">
        <Dashboard_navbar/>
        <Profile data={session?.user}/>
      </div>
      <Footer />
    </div>
  )
}

export default renderDisplay;