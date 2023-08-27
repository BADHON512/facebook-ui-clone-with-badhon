import { NextRequest, NextResponse } from "next/server";

export async function GET() {
 console.log(NextRequest)
return NextResponse.json({
    message:"badhon vai"
})
}

export async function POST(req){
    const badhon= await req.json()
 
   return  NextResponse.json(
        badhon
     )
}