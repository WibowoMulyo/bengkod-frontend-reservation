'use server'
import { RequestHttp } from "./core/Request";
import Cookies from 'js-cookie'
import { cookies } from 'next/headers'
import { serialize } from 'cookie';
import { ApiHandler } from "@/lib/apiHandler";
interface login {
  user_data: any,
}

// export const LoginAPI = {
//   Login: async function({user_data} : login){
//     let data = await ApiHandler({
//       requestfunc: () => RequestHttp({ type: "post", url: "login", ...user_data }),
//     })

//     try{
//       cookies().set('token', data.data.token, {
//         httpOnly: true,
//         maxAge: 60 * 60,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: 'strict',
//         path: '/',
//       })

//       return {status: "success"}
//     }catch(e){
//       throw new Error("Kesalahan saat melakukan login")
//     }
//   },
//   Logout: async function(){
//     try{
//       cookies().delete('token')
//       return {status: "success"}
//     }catch(e){
//       throw new Error("Kesalahan saat melakukan logout")
//     }
//   }
// }

export async function Login({ user_data }: login) {
  let data = await ApiHandler({
    requestfunc: () => RequestHttp({ type: "post", url: "login", datas: user_data }),
  })
  // let data = await RequestHttp({ type: "post", url: "login", datas:user_data })
  // return data
  try {
    cookies().set('token', data.token, {
      httpOnly: true,
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV === "production",
      sameSite: 'strict',
      path: '/',
    })
    return true
  } catch (e) {
    throw new Error(`Kesalahan saat melakukan login, ${e}`)
  }
}

// export async function Login({ user_data }: login) {
//   const res = await RequestHttp({
//     type: 'post',
//     url: 'login',
//     datas: { ...user_data }
//   })
//   let final = ''
//   if (res.status == 'success') {
//     cookies().set('token', res.data.token, {
//       httpOnly: true,
//       maxAge: 60 * 60,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: 'strict',
//       path: '/',
//     })
//     final = await getDataUser
//     return res
//   }
// }


export async function Logout() {
  try {
    cookies().delete('token')
    return { status: "success" }
  } catch (e) {
    throw new Error("Kesalahan saat melakukan logout")
  }
}