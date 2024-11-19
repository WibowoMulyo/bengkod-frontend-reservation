import Image from "next/image";
import Calendar from "../../dashboard/calendar/page";
import History from "../../dashboard/history/page";
import { useState } from "react";
import Profile from "../../dashboard/profile/page";
import CustomLink from "../Link/CustomLink";

const Dashboard_navbar = () => {
  const [navbar, setNavbar] = useState(1)
  return (
    <header className="md:flex block md:mt-[3.5%] mb-[6%] lg:mx-8 mx-auto">
      {/* HEADER CONTENT */}
      <div className="flex flex-col w-[250px]">
        <div className="text-center">
          <h1 className="text-[#6b7a99] font-bold capitalize text-2xl text-wrap">halo, kaoruko waguri!</h1>
          <p className="text-[#adb8cc] font-bold text-xs mt-2">examplemhs@mhs.dinus.ac.id</p>
        </div>
        <div className="bg-white rounded-xl p-3 mt-8 md:mx-4  shadow-[1px_5px_50px_4px_rgba(0,0,0,0.05)] lg:shadow-none mx-auto">
          <div className="flex w-full">
            <div className="mr-auto">
              <h1 className="text-[#202224] font-normal text-sm">Total reservation</h1>
              <p className="text-xl font-semibold mt-2">40,689</p>
            </div>
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M46.7864 23.1144C46.7864 35.7621 36.5334 46.0152 23.8856 46.0152C11.2379 46.0152 0.984863 35.7621 0.984863 23.1144C0.984863 10.4666 11.2379 0.213623 23.8856 0.213623C36.5334 0.213623 46.7864 10.4666 46.7864 23.1144Z" fill="#8280FF" />
              <path opacity="0.587821" fill-rule="evenodd" clip-rule="evenodd" d="M16.7607 18.0253C16.7607 20.2738 18.5835 22.0966 20.832 22.0966C23.0805 22.0966 24.9032 20.2738 24.9032 18.0253C24.9032 15.7769 23.0805 13.9541 20.832 13.9541C18.5835 13.9541 16.7607 15.7769 16.7607 18.0253ZM26.9389 22.0968C26.9389 23.7831 28.3059 25.1502 29.9923 25.1502C31.6787 25.1502 33.0457 23.7831 33.0457 22.0968C33.0457 20.4104 31.6787 19.0433 29.9923 19.0433C28.3059 19.0433 26.9389 20.4104 26.9389 22.0968Z" fill="#8280FF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8152 24.1323C16.0097 24.1323 12.067 26.6021 11.6725 31.4598C11.651 31.7244 12.1571 32.2748 12.4123 32.2748H29.2258C29.9904 32.2748 30.0022 31.6595 29.9904 31.4606C29.6921 26.4664 25.6884 24.1323 20.8152 24.1323ZM35.5455 32.2747H31.6209V32.2746C31.6209 29.9836 30.864 27.8695 29.5866 26.1685C33.0537 26.2064 35.8847 27.9594 36.0977 31.6641C36.1063 31.8133 36.0977 32.2747 35.5455 32.2747Z" fill="#8280FF" />
            </svg>
          </div>
          <div className="flex gap-x-1.5 text-xs mt-8 items-center">
            <svg width="16" height="16" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4277 0.946533L13.1758 2.69462L9.45065 6.41982L6.39721 3.36638L0.740723 9.0305L1.81706 10.1068L6.39721 5.52669L9.45065 8.58012L14.2598 3.77859L16.0079 5.52669V0.946533H11.4277Z" fill="#00B69B" />
            </svg>
            <p className="text-[#00B69B]">8,5%</p>
            <p className="text-[#202224]">Up from yesterday</p>
          </div>
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
                  <svg width="17" height="17" viewBox="0 0 18 17" fill="#1e3a8b" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.00625 2.8501C4.63906 1.21729 6.58698 0.400879 8.85 0.400879C11.113 0.400879 13.0466 1.21729 14.6508 2.8501C16.2836 4.45426 17.1 6.38786 17.1 8.65088C17.1 10.9139 16.2836 12.8618 14.6508 14.4946C13.0466 16.0988 11.113 16.9009 8.85 16.9009C6.58698 16.9009 4.63906 16.0988 3.00625 14.4946C1.40208 12.8618 0.599998 10.9139 0.599998 8.65088C0.599998 6.38786 1.40208 4.45426 3.00625 2.8501ZM13.7055 3.79541C12.3591 2.44906 10.7406 1.77588 8.85 1.77588C6.95937 1.77588 5.34088 2.44906 3.99453 3.79541C2.64818 5.14176 1.975 6.76025 1.975 8.65088C1.975 10.5415 2.64818 12.16 3.99453 13.5063C5.34088 14.8527 6.95937 15.5259 8.85 15.5259C10.7406 15.5259 12.3591 14.8527 13.7055 13.5063C15.0518 12.16 15.725 10.5415 15.725 8.65088C15.725 6.76025 15.0518 5.14176 13.7055 3.79541ZM8.33437 2.67822C8.4776 2.53499 8.64948 2.46338 8.85 2.46338C9.05052 2.46338 9.20807 2.53499 9.32265 2.67822C9.46588 2.79281 9.5375 2.95036 9.5375 3.15088C9.5375 3.3514 9.46588 3.52327 9.32265 3.6665C9.20807 3.78109 9.05052 3.83838 8.85 3.83838C8.64948 3.83838 8.4776 3.78109 8.33437 3.6665C8.21979 3.52327 8.1625 3.3514 8.1625 3.15088C8.1625 2.95036 8.21979 2.79281 8.33437 2.67822ZM4.46719 4.31104C4.61042 4.16781 4.76797 4.09619 4.93984 4.09619C5.14036 4.09619 5.31224 4.16781 5.45547 4.31104C5.5987 4.42562 5.67031 4.58317 5.67031 4.78369C5.67031 4.95557 5.5987 5.11312 5.45547 5.25635C5.31224 5.39958 5.14036 5.47119 4.93984 5.47119C4.76797 5.47119 4.61042 5.39958 4.46719 5.25635C4.3526 5.11312 4.29531 4.95557 4.29531 4.78369C4.29531 4.58317 4.3526 4.42562 4.46719 4.31104ZM12.2445 4.26807L13.2328 5.25635L10.182 8.30713C10.2107 8.42171 10.225 8.5363 10.225 8.65088C10.225 9.02327 10.0818 9.3527 9.79531 9.63916C9.5375 9.89697 9.22239 10.0259 8.85 10.0259C8.4776 10.0259 8.14818 9.89697 7.86172 9.63916C7.6039 9.3527 7.475 9.02327 7.475 8.65088C7.475 8.27848 7.6039 7.96338 7.86172 7.70557C8.14818 7.41911 8.4776 7.27588 8.85 7.27588C8.96458 7.27588 9.07917 7.2902 9.19375 7.31885L12.2445 4.26807ZM2.83437 8.17822C2.9776 8.03499 3.14948 7.96338 3.35 7.96338C3.55052 7.96338 3.70807 8.03499 3.82265 8.17822C3.96588 8.29281 4.0375 8.45036 4.0375 8.65088C4.0375 8.8514 3.96588 9.02327 3.82265 9.1665C3.70807 9.28109 3.55052 9.33838 3.35 9.33838C3.14948 9.33838 2.9776 9.28109 2.83437 9.1665C2.71979 9.02327 2.6625 8.8514 2.6625 8.65088C2.6625 8.45036 2.71979 8.29281 2.83437 8.17822ZM13.8344 8.17822C13.9776 8.03499 14.1495 7.96338 14.35 7.96338C14.5505 7.96338 14.7081 8.03499 14.8227 8.17822C14.9659 8.29281 15.0375 8.45036 15.0375 8.65088C15.0375 8.8514 14.9659 9.02327 14.8227 9.1665C14.7081 9.28109 14.5505 9.33838 14.35 9.33838C14.1495 9.33838 13.9776 9.28109 13.8344 9.1665C13.7198 9.02327 13.6625 8.8514 13.6625 8.65088C13.6625 8.45036 13.7198 8.29281 13.8344 8.17822ZM4.46719 12.0454C4.61042 11.9022 4.76797 11.8306 4.93984 11.8306C5.14036 11.8306 5.31224 11.9022 5.45547 12.0454C5.5987 12.1886 5.67031 12.3605 5.67031 12.561C5.67031 12.7329 5.5987 12.8905 5.45547 13.0337C5.31224 13.1483 5.14036 13.2056 4.93984 13.2056C4.76797 13.2056 4.61042 13.1483 4.46719 13.0337C4.3526 12.8905 4.29531 12.7329 4.29531 12.561C4.29531 12.3605 4.3526 12.1886 4.46719 12.0454ZM12.2445 12.0454C12.3878 11.9022 12.5453 11.8306 12.7172 11.8306C12.9177 11.8306 13.0753 11.9022 13.1898 12.0454C13.3331 12.1886 13.4047 12.3605 13.4047 12.561C13.4047 12.7329 13.3331 12.8905 13.1898 13.0337C13.0753 13.1483 12.9177 13.2056 12.7172 13.2056C12.5453 13.2056 12.3878 13.1483 12.2445 13.0337C12.1013 12.8905 12.0297 12.7329 12.0297 12.561C12.0297 12.3605 12.1013 12.1886 12.2445 12.0454Z" fill="white" />
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
                  <svg width="17" height="17" viewBox="0 0 16 16" fill="#1e3a8b" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.287499 0.0883789H0.974999H14.725H15.4125V0.775879V14.5259V15.2134H14.725H0.974999H0.287499V14.5259V0.775879V0.0883789ZM1.6625 1.46338V6.96338H7.1625V1.46338H1.6625ZM8.5375 1.46338V6.96338H14.0375V1.46338H8.5375ZM1.6625 8.33838V13.8384H7.1625V8.33838H1.6625ZM8.5375 8.33838V13.8384H14.0375V8.33838H8.5375Z" fill="black" />
                  </svg>
                  <p className="capitalize font-medium text-sm">riwayat</p>
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
              <svg width="21" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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