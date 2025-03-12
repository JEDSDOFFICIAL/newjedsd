import { resend } from "@/lib/resend";
import { Author } from "@/model/User";
import { ApiResponse } from '@/types/ApiResponse';
import PaperUploadEmail from "../../emails/PaperUploadMail";


export async function sendSuccessfulUploadPaperEmail(
  author: Author[],
  papername:string,
): Promise<ApiResponse> {
  console.log("author email",author);
  
  try {
   const authorEmail = author.map((author) => author.emailId).join(", ");
    await resend.emails.send({
      from: 'editorial@jedsd.com',
      to: authorEmail,
      subject: 'JEDSD Successful Uploaded Mail',
      react: PaperUploadEmail({ paperName: papername }),
    });
 
    
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
