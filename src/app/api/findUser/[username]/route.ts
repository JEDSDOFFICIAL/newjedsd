import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/User";

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
  await dbConnect();

  try {
    const { username } = params;

    console.log("User ID:", username); // Log the user ID

    if (!username) {
      return NextResponse.json(
        { success: false, message: "Username is required" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ username });

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
