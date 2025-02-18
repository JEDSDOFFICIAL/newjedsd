import dbConnect from "@/lib/dbConnect";
import { PaperModel, UserModel } from "@/model/User";
import { NextResponse } from "next/server";
export async function POST(request: Request, context: { params: { username: string } }) {
  await dbConnect();
  const { username } = context.params;

  console.log("User name in upload API:", username); // Log the username for debugging

  try {
    // Ensure request body is not empty
    if (!request.body) {
      return NextResponse.json(
        { success: false, message: "Request body is missing" },
        { status: 400 }
      );
    }

    // Parse JSON safely
    let body;
    try {
      body = await request.json();
      console.log("Request body:", body); // Log the request body for debugging
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const { paperName, abstract, authors, keywords, pointofContact, fileUrl } = body;

    if (!paperName || !abstract || !authors?.length || !pointofContact || !fileUrl ) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      );
    }
const newkeywords = keywords.split(",").map((keyword: string) => keyword.trim());
    const newPaper = {
      paperName,
      abstract,
      keywords: newkeywords,
      authors,
      pointofContact,
      paperurl: fileUrl,
      status: "uploaded",
      createdAt: new Date(),
    };

    const PaperPublished = await PaperModel.create(newPaper);
    const paperId = PaperPublished._id;

    await UserModel.findOneAndUpdate(
      { username: username },
      { $push: { paper: paperId } }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Paper uploaded successfully",
        data: PaperPublished,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in uploading paper:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error in uploading paper",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
