import dbConnect from "@/lib/dbConnect";
import {PaperModel} from "@/model/User"; // Ensure this model exists
import { NextResponse } from "next/server";

export async function POST(request: Request, context: { params: { username: string } }) {
    try {
        await dbConnect();
        const { username } = context.params;
        console.log("User name in upload API:", username); // Debugging

        const body = await request.json();
        const { paperId, updateData } = body;

        if (!paperId || !updateData) {
            return NextResponse.json(
                { success: false, message: "Paper ID and update data are required" },
                { status: 400 }
            );
        }

        // Find the paper by ID
        const paper = await PaperModel.findById(paperId);

        if (!paper) {
            return NextResponse.json(
                { success: false, message: "Paper not found" },
                { status: 404 }
            );
        }

        // Update the paper
        const updatedPaper = await PaperModel.findByIdAndUpdate(
            paperId,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        return NextResponse.json(
            { success: true, message: "Paper updated successfully", data: updatedPaper },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating paper:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
