import BookData from "@/app/models/bookdata";
import dbConnect from "@/app/utils/dbConnection";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await dbConnect();
    await BookData.create(body);

    return NextResponse.json(
      { message: "Book created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Book failed to add" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const res = await BookData.find({});
    return NextResponse.json({ data: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Can't get book",
      },
      {
        status: 500,
      }
    );
  }
}
