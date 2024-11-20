'use server'
import { RequestHttp } from "./core/Request";
import Cookies from 'js-cookie'
import { cookies } from 'next/headers'
import { serialize } from 'cookie';
import { NextResponse } from "next/server";
interface login {
  user_data: any,
}

export async function Login({ user_data }: login) {
  var hour = new Date(new Date().getTime() + 60 * 60 * 1000);
  const data = await RequestHttp({
    type: 'post',
    url: `login`,
    datas: { ...user_data }
  })
  if (data.status == 'success') {
    
    cookies().set('token', data.data.token, {
      httpOnly: true,
      maxAge: 60*60,
      sameSite: 'strict'
    })

    return data.status
  } else if (data.status == 'error') {
    return data
  }
}


export async function Logout() {
  try {
    const data = await RequestHttp({
      url: 'http://127.0.0.1:8000/api/logout',
      type: 'get',
    })
    if (data.status == 'success') {
      console.log("Success logout!")
    }
  } catch (e) {
    throw new Error('Error logout')
  }
}