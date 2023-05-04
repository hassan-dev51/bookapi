import Contact from "@/app/models/book";
import dbConnect from "@/app/utils/dbConnection";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(request: Request) {
  try {
    const response = await request.json();
    console.log(response);

    await dbConnect();

    const userLogin = await Contact.findOne({
      email: response.email,
      password: response.password,
    });
    if (userLogin) {
      const token = jwt.sign(
        { _id: userLogin._id },
        process.env.JWT_SECRET_KEY!
      );
      userLogin.tokens.push({ token });
      userLogin.save();

      const jsonResponse = NextResponse.json(
        { message: "Login successful", userLogin },
        { status: 200 }
      );
      jsonResponse.cookies.set("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      return jsonResponse;
    } else {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 429 }
      );
    }
  } catch (error) {
    console.log(error, "Error in login request");
  }
}
