import { NextResponse } from "next/server";
export async function GET() {
return NextResponse.json({
    message: "welcome to then next js"
})
}