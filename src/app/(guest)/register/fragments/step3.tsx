import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import HeaderCard from "@/components/card/HeaderCard";
import GrayInput from "@/components/input/GrayInput";
import Label from "@/components/label/Label";
import ResponsiveImage from "@/components/ResponsiveImage";
import { register } from "@/components/interface/Register";

interface props{
  onClick?: () => void,
  setFormData?: (val: register) => void,
}

const Step3 = ({setFormData} : props) => {
  return (
    <section>
      <HeaderCard className="w-[1200px] mx-auto">
        <div className="mx-12 my-4">
          <div className="flex flex-col gap-y-4">
            <div className="">
              <h1 className="text-gray-900 font-normal">Daftar Akun</h1>
              <p className="text-gray-500 font-light mt-1.5">Lengkapi data pendaftaran untuk melanjutkan ke tahap selanjutnya</p>
            </div>
            <div className="flex text-nowrap justify-center mb-8">
              <div className="relative w-1/4">
                <div className="flex flex-row">
                  {/* <div className="border-gray-100 text-gray-400 border-2 rounded-[50%] p-2 h-[40px] w-[40px] flex flex-col justify-center items-center">
                    <p>1</p>
                  </div> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="" className="bi bi-check-circle-fill fill-success" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <div className="w-full border-success border-t-[4px] my-auto">
                    <hr />
                  </div>
                </div>
                <p className="absolute top-1/2 left-4 -translate-x-1/2 translate-y-6 text-black">Pendaftaran Akun</p>
              </div>
              <div className="relative w-1/4">
                <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="" className="bi bi-check-circle-fill fill-success" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <div className="w-full border-success border-t-[4px] my-auto">
                    <hr />
                  </div>
                </div>
                <p className="absolute top-1/2 left-4 -translate-x-1/2 translate-y-6 text-black">Konfirmasi Data</p>
              </div>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="" className="bi bi-check-circle-fill fill-success" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 text-black">Akun</p>
              </div>
            </div>
          </div>
        </div>
      </HeaderCard>

      <HeaderCard className="mx-auto w-[700px]">
        <div className="m-12">
          <div className="flex flex-col items-center mb-12">
            <div className="w-1/6">
              <ResponsiveImage
                src="/image/benlogo.png"
                alt="Logo bengkod"
                width={500}
                height={500}
              />
            </div>
            <h1 className="text-black font-bold text-2xl">Bengkel Koding</h1>
            <p className="text-gray-600 font-light">Selamat akunmu berhasil dibuat!</p>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col w-full">
              <Label>
                Alamat email <span className="text-red-500">*</span>
              </Label>
              <GrayInput name="email_mhs" errorValue="" value="exampleemail@mhs.dinus.ac.id" disabled className="w-full p-3 bg-gray-50 text-sm" placeholder="Gunakan Alamat email mahasiswa!" />
            </div>
            <div className="flex flex-col w-full">
              <Label>
                Password <span className="text-red-500">*</span>
              </Label>
              <GrayInput name="password" type='password' errorValue="" value="*******" disabled className="w-full p-3 bg-gray-50 text-sm" placeholder="Nama lengkap anda" />
            </div>
          </div>
          <PrimaryButton className="font-medium mt-8 px-4">
            Masuk Sekarang
          </PrimaryButton>
        </div>
      </HeaderCard>
    </section>
  )
}

export default Step3;