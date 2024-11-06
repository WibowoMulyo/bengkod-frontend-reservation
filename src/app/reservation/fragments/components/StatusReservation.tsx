

const StatusReservation = ({status = '1'}) => {
  if (status === '1') {
      return <div className="bg-[#b9fbbc] md:rounded-xl rounded-2xl border-[#a3e0a5] border-4">
          <div className="flex lg:px-[4%] px-[5%] md:py-[1%] py-[2%] lg:gap-7 gap-4 items-center">
              <div className="">
                  <div className="bg-white md:p-[6px] p-[4px] rounded-lg">
                      <div className="hidden md:block">
                          <svg width="20" height="20" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M19.7808 1.38645C20.0542 1.65993 20.2078 2.03079 20.2078 2.41749C20.2078 2.80419 20.0542 3.17506 19.7808 3.44853L8.85011 14.3792C8.70566 14.5237 8.53416 14.6383 8.34541 14.7165C8.15666 14.7947 7.95435 14.835 7.75004 14.835C7.54573 14.835 7.34342 14.7947 7.15467 14.7165C6.96592 14.6383 6.79442 14.5237 6.64997 14.3792L1.21914 8.94937C1.07985 8.81484 0.968753 8.65392 0.892323 8.476C0.815893 8.29808 0.775663 8.10671 0.773981 7.91308C0.772298 7.71944 0.809197 7.52741 0.882523 7.34818C0.955849 7.16896 1.06414 7.00613 1.20106 6.86921C1.33799 6.73228 1.50081 6.62399 1.68004 6.55067C1.85926 6.47734 2.05129 6.44044 2.24493 6.44213C2.43857 6.44381 2.62993 6.48404 2.80785 6.56047C2.98578 6.6369 3.14669 6.748 3.28122 6.88728L7.74955 11.3556L17.7177 1.38645C17.8532 1.25093 18.014 1.14343 18.191 1.07008C18.368 0.996736 18.5577 0.958984 18.7493 0.958984C18.9409 0.958984 19.1306 0.996736 19.3076 1.07008C19.4846 1.14343 19.6454 1.25093 19.7808 1.38645Z" fill="#42AD2D" />
                          </svg>
                      </div>
                      <div className="block md:hidden">
                          <svg width="20" height="20" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clip-rule="evenodd" d="M19.7808 1.38645C20.0542 1.65993 20.2078 2.03079 20.2078 2.41749C20.2078 2.80419 20.0542 3.17506 19.7808 3.44853L8.85011 14.3792C8.70566 14.5237 8.53416 14.6383 8.34541 14.7165C8.15666 14.7947 7.95435 14.835 7.75004 14.835C7.54573 14.835 7.34342 14.7947 7.15467 14.7165C6.96592 14.6383 6.79442 14.5237 6.64997 14.3792L1.21914 8.94937C1.07985 8.81484 0.968753 8.65392 0.892323 8.476C0.815893 8.29808 0.775663 8.10671 0.773981 7.91308C0.772298 7.71944 0.809197 7.52741 0.882523 7.34818C0.955849 7.16896 1.06414 7.00613 1.20106 6.86921C1.33799 6.73228 1.50081 6.62399 1.68004 6.55067C1.85926 6.47734 2.05129 6.44044 2.24493 6.44213C2.43857 6.44381 2.62993 6.48404 2.80785 6.56047C2.98578 6.6369 3.14669 6.748 3.28122 6.88728L7.74955 11.3556L17.7177 1.38645C17.8532 1.25093 18.014 1.14343 18.191 1.07008C18.368 0.996736 18.5577 0.958984 18.7493 0.958984C18.9409 0.958984 19.1306 0.996736 19.3076 1.07008C19.4846 1.14343 19.6454 1.25093 19.7808 1.38645Z" fill="#42AD2D" />
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="text-[11px] lg:text-[16px]">
                  <h1 className="font-semibold">Pesanan reservasi sudah terkonfirmasi</h1>
              </div>
          </div>
      </div>
  } else {
      return <div className="my-2">
          <div className="bg-[#f89f9b] md:rounded-xl rounded-2xl border-[#de8e8b] border-4 mb-4">
              <div className="flex lg:px-[4%] px-[5%] md:py-[1%] py-[2%] lg:gap-7 gap-4 items-center">
                  <div className="">
                      <div className="bg-white md:p-[6px] p-[4px] rounded-lg">
                          <div className="hidden md:block">
                              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15.875 1.875L1.875 15.875M1.875 1.875L15.875 15.875" stroke="#BA0900" stroke-width="3.75" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </div>
                          <div className="block md:hidden">
                              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15.875 1.875L1.875 15.875M1.875 1.875L15.875 15.875" stroke="#BA0900" stroke-width="3.75" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </div>
                      </div>
                  </div>
                  <div className="text-[12px] lg:text-lg">
                      <h1 className="font-semibold">Your confirmation isn't Confirmed!</h1>
                  </div>
              </div>
          </div>
          {/* <div className="bg-black/25 rounded-xl shadow-lg px-4 py-3 italic text-sm">
              <p>Kami mohon maaf, pemesanan meja Anda tidak dapat diproses karena Anda telah meminjam meja melebihi batas yang ditentukan. Silakan cek halaman profile Anda untuk mengetahui detail limit peminjaman.</p>
          </div> */}
      </div>
  }
}

export default StatusReservation;