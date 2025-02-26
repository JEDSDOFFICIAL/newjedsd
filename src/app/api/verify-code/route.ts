import { sendSuccessfulAuthEmail } from '@/helpers/sendSuccessfulAuthEmail';
import dbConnect from '@/lib/dbConnect';
import { UserModel } from '@/model/User';

export async function POST(request: Request) {
  try {
    await dbConnect();

    let body;
    try {
      body = await request.json();
    } catch (err) {
      console.error("Error parsing request body:", err);
      return Response.json({ success: false, message: "Invalid request body" }, { status: 400 });
    }

    const { username, code } = body;

    if (!username || !code) {
      return Response.json(
        { success: false, message: "Username and verification code are required" },
        { status: 400 }
      );
    }

    console.log("Received username:", username);
    console.log("Received code:", code);

    let decodedUsername;
    try {
      decodedUsername = decodeURIComponent(username);
    } catch (err) {
      console.error("Error decoding username:", err);
      return Response.json({ success: false, message: "Invalid username format" }, { status: 400 });
    }

    const user = await UserModel.findOne({ username: decodedUsername });

    if (!user) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    console.log("User found:", user);

    // Check if the code matches and is not expired
    const isCodeValid = user.verifyCode === code;
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      user.verifyCodeExpiry = new Date();
      
      try {
        await user.save();
      } catch (err) {
        console.error("Error saving user:", err);
        return Response.json({ success: false, message: "Database save error" }, { status: 500 });
      }

      try {
        await sendSuccessfulAuthEmail(user.email, user.username);
      } catch (err) {
        console.error("Error sending email:", err);
        return Response.json({ success: false, message: "User verified but email sending failed" }, { status: 500 });
      }

      return Response.json(
        { success: true, message: "Account verified successfully" },
        { status: 200 }
      );
    } else if (!isCodeNotExpired) {
      return Response.json(
        {
          success: false,
          message: "Verification code has expired. Please sign up again to get a new code.",
        },
        { status: 400 }
      );
    } else {
      return Response.json(
        { success: false, message: "Incorrect verification code" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Unexpected Error verifying user:", error);
    return Response.json(
      { success: false, message: "Unexpected error verifying user" },
      { status: 500 }
    );
  }
}
