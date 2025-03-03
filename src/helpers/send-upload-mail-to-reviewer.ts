import { resend } from "@/lib/resend";
import { Author, Paper } from "@/model/User";
import { ApiResponse } from '@/types/ApiResponse';
import ReviewerNotificationEmail from "../../emails/NewPaperUploadedtoReviewer";



export async function sendSuccessfulUploadPaperEmailtoReviwer(
  paperdetails:Paper,
  username:string,
    reviewerName:string,
): Promise<ApiResponse> {
  try {
   
    await resend.emails.send({
      from: 'host@jedsd.com',
      to: "jedsdofficial@gmail.com",
      subject: 'JEDSD New Menuscript Uploaded Mail',
      react: ReviewerNotificationEmail(username, reviewerName, paperdetails),
    });
 
    
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
