import Contact from "@/app/models/book";
import dbConnect from "@/app/utils/dbConnection";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();

    const ifEmailExists = await Contact.findOne({ email: body.email });
    if (ifEmailExists) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 400 }
      );
    }
    const contact = await Contact.create(body);
    //generate jwt token
    const token = jwt.sign({ _id: contact._id }, process.env.JWT_SECRET_KEY!);
    contact.tokens.push({ token });
    contact.save();

    const response = NextResponse.json(
      {
        message: "Registration Successfully Done",
        contact,
      },
      {
        status: 200,
      }
    );
    //set the cookies
    response.cookies.set("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Registration Failure",
      },
      { status: 500 }
    );
  }
}
