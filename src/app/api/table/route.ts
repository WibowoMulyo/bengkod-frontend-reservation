import { RequestHttp } from "@/services/core/Request";
import { ApiHandler } from "@/lib/apiHandler";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Parse body request
  const { searchParams } = new URL(request.url)
  const params = Object.fromEntries(searchParams.entries());
  let data = await ApiHandler({
    requestfunc: () => RequestHttp({ type: "get", params: params, url: 'detail-reservation-table' }),
  })

  return NextResponse.json(data)
}