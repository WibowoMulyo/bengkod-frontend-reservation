import { RequestHttp } from "@/services/core/Request";
import { ApiHandler } from "@/lib/apiHandler";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Parse body request
  const body = await request.json();
  let data = await ApiHandler({
    requestfunc: () => RequestHttp({ type: "post", url: "login", datas: body }),
  })

  return NextResponse.json(data)
}