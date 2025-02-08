import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/User";
import { Types } from "mongoose";
export async function GET(request: Request, context: { params: { userid: string } }) {
  await dbConnect();

  try {
    const { userid } = context.params; 

console.log("User ID:", userid); // Log the user ID 

    if (!userid) {
      return NextResponse.json(
        { success: false, message: "Username is required" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ _id: new Types.ObjectId(userid) });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("Error finding user:", error);
    return NextResponse.json(
      { success: false, message: "Error finding user" },
      { status: 500 }
    );
  }
}
