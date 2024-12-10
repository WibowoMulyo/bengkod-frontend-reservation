import { RequestHttp } from "@/services/core/Request";
import { ApiHandler } from "@/lib/apiHandler";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Parse body request
  const { searchParams } = new URL(request.url)
  const params = Object.fromEntries(searchParams.entries());
  let data = await ApiHandler({
    requestfunc: () => RequestHttp({ type: "get", url: "user" }),
  })

  return NextResponse.json(data)
}

export async function PATCH(request: Request) {
  // Parse body request
  const body = await request.json()
  let data = await ApiHandler({
    requestfunc: () => RequestHttp({ type: "post", url: "user", datas: body }),
  })

  return NextResponse.json(data)
}