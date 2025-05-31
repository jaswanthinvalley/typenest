import { NextRequest, NextResponse } from "next/server";
export async function GET(respone : NextResponse,request : NextRequest) {
return NextResponse.json({
    message: "welcome to then next js",
    res : respone.url,
    req : request.cookies
})
}


export async function POST() {
     
}