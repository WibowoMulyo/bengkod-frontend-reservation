import NavBar from "./navbar";
import Footer from "./footer";
import LandingButton from "./components/LandingButton";
import ResponsiveImage from "./components/ResponsiveImage";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="w-5/6 h-40 bg-white rounded-[20px] flex flex-col justify-center items-center mx-auto">
        <ResponsiveImage
          src="/image/benlogo_white.png"
          width={100}
          height={100}
          className="max-w-[80px] max-h-[80px]"
          alt="foto meja"
        />

        <Form 
          className=""
          header="Email"
          clue="Masukkan alamat email" 
        />

        <Form className="" header="" clue=""/>

        
      </div>
      <Footer />
    </div>
  );
}
