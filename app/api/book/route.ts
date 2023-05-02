import BookData from "@/app/models/bookdata";
import dbConnect from "@/app/utils/dbConnection";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

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

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("_id");
    if (id) {
      const res = await BookData.findById(id);
      return NextResponse.json({ data: res });
    }
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
