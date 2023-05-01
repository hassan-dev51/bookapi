import Contact from "@/app/models/book";
import dbConnect from "@/app/utils/dbConnection";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Registration Successfully Done",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Registration Failure",
      },
      { status: 500 }
    );
  }
}
