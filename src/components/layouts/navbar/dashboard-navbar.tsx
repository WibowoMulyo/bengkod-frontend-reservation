'use client'
import CustomLink from "@/components/link/CustomLink";
import { useSession } from "next-auth/react";
import { profile } from "../../interface/Profile";
const Dashboard_navbar = () => {
  const {data: session} = useSession()
  return (
    <header className="md:flex block md:mt-[3.5%] mb-[6%] lg:mx-8 mx-auto">
      {/* HEADER CONTENT */}
      <div className="flex flex-col w-[250px]">
        <div className="text-center">
          <h1 className="text-[#6b7a99] font-bold capitalize text-2xl text-wrap">{session?.user.name}</h1>
          <p className="text-[#adb8cc] font-bold text-xs mt-2">{session?.user.email_mhs}</p>
        </div>
        <div className="hidden md:flex flex-col h-full mt-[6%]">
          <div className=" mx-2">
            <div className="">
              <CustomLink
                href="/dashboard/calendar"
                className="relative mt-4 w-full rounded-lg hover:bg-[#1e3a8b] hover:text-white p-4"
                whenactive={"bg-[#1e3a8b] text-white"}
                whennotactive="text-black"
              >
                <div className="flex gap-x-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  <p className="capitalize font-medium text-sm">kalender</p>
                </div>
              </CustomLink>
            </div>
            <div className="mt-4">
              <CustomLink
                className="relative w-full rounded-lg hover:bg-[#1e3a8b] hover:text-white p-4"
                whenactive={"bg-[#1e3a8b] text-white"}
                whennotactive="text-black"
                href="/dashboard/history"
              >
                <div className="flex gap-x-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                  <p className="capitalize font-medium text-sm">riwayat</p>
                </div>
              </CustomLink>

              <CustomLink
                className="relative w-full rounded-lg hover:bg-[#1e3a8b] hover:text-white p-4"
                whenactive={"bg-[#1e3a8b] text-white"}
                whennotactive="text-black"
                href="/dashboard/reserved"
              >
                <div className="flex gap-x-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                  <p className="capitalize font-medium text-sm">Pesanan anda</p>
                </div>
              </CustomLink>
            </div>
          </div>
          <div className="mt-auto mx-4">
            <div className="flex gap-x-3 w-full items-center">
              <svg width="21" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.900879H2C0.9 0.900879 0.01 1.80088 0.01 2.90088L0 20.9009L4 16.9009H18C19.1 16.9009 20 16.0009 20 14.9009V2.90088C20 1.80088 19.1 0.900879 18 0.900879ZM5 7.90088H15C15.55 7.90088 16 8.35088 16 8.90088C16 9.45088 15.55 9.90088 15 9.90088H5C4.45 9.90088 4 9.45088 4 8.90088C4 8.35088 4.45 7.90088 5 7.90088ZM11 12.9009H5C4.45 12.9009 4 12.4509 4 11.9009C4 11.3509 4.45 10.9009 5 10.9009H11C11.55 10.9009 12 11.3509 12 11.9009C12 12.4509 11.55 12.9009 11 12.9009ZM15 6.90088H5C4.45 6.90088 4 6.45088 4 5.90088C4 5.35088 4.45 4.90088 5 4.90088H15C15.55 4.90088 16 5.35088 16 5.90088C16 6.45088 15.55 6.90088 15 6.90088Z" fill="#C3CAD9" />
              </svg>
              <p className="font-medium text-[#ADB8CC] capitalize text-xs mr-auto">send feedback</p>
              <svg width="17" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.49336H12.17L7.29 14.3734C6.9 14.7634 6.9 15.4034 7.29 15.7934C7.68 16.1834 8.31 16.1834 8.7 15.7934L15.29 9.20336C15.68 8.81336 15.68 8.18336 15.29 7.79336L8.71 1.19336C8.52317 1.00611 8.26952 0.900879 8.005 0.900879C7.74048 0.900879 7.48683 1.00611 7.3 1.19336C6.91 1.58336 6.91 2.21336 7.3 2.60336L12.17 7.49336H1C0.45 7.49336 0 7.94336 0 8.49336C0 9.04336 0.45 9.49336 1 9.49336Z" fill="#C3CAD9" />
              </svg>
            </div>
            <div className="flex gap-x-3 w-full items-center mt-6">
              <svg width="21" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-primary-900">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.900879C4.48 0.900879 0 5.38088 0 10.9009C0 16.4209 4.48 20.9009 10 20.9009C15.52 20.9009 20 16.4209 20 10.9009C20 5.38088 15.52 0.900879 10 0.900879ZM11 17.9009H9V15.9009H11V17.9009ZM13.07 10.1509L12.17 11.0709C11.67 11.5809 11.31 12.0409 11.13 12.7609C11.05 13.0809 11 13.4409 11 13.9009H9V13.4009C9 12.9409 9.08 12.5009 9.22 12.0909C9.42 11.5109 9.75 10.9909 10.17 10.5709L11.41 9.31088C11.87 8.87088 12.09 8.21088 11.96 7.51088C11.83 6.79088 11.27 6.18088 10.57 5.98088C9.46 5.67088 8.43 6.30088 8.1 7.25088C7.98 7.62088 7.67 7.90088 7.28 7.90088H6.98C6.4 7.90088 6 7.34088 6.16 6.78088C6.59 5.31088 7.84 4.19088 9.39 3.95088C10.91 3.71088 12.36 4.50088 13.26 5.75088C14.44 7.38088 14.09 9.13088 13.07 10.1509Z" fill="#C3CAD9" />
              </svg>
              <p className="font-medium text-[#ADB8CC] capitalize text-xs mr-auto">knowledge base</p>
              <svg width="17" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.49336H12.17L7.29 14.3734C6.9 14.7634 6.9 15.4034 7.29 15.7934C7.68 16.1834 8.31 16.1834 8.7 15.7934L15.29 9.20336C15.68 8.81336 15.68 8.18336 15.29 7.79336L8.71 1.19336C8.52317 1.00611 8.26952 0.900879 8.005 0.900879C7.74048 0.900879 7.48683 1.00611 7.3 1.19336C6.91 1.58336 6.91 2.21336 7.3 2.60336L12.17 7.49336H1C0.45 7.49336 0 7.94336 0 8.49336C0 9.04336 0.45 9.49336 1 9.49336Z" fill="#C3CAD9" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Dashboard_navbar;