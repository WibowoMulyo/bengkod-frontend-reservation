import Image from "next/image";
import { useEffect } from "react";
import { redirect } from 'next/navigation';
export default function Home() {
  redirect('/dashboard/calendar')
  return (
    <div>
      <NavBar />

      <FirstSec />

      <SecondSec />

      <ThirdSec />
      
      <ForthSec />

      <Footer />
    </div>
  );
}
