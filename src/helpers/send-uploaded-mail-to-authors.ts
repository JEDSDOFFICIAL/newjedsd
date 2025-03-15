import { resend } from "@/lib/resend";
import { Author } from "@/model/User";
import { ApiResponse } from '@/types/ApiResponse';
import PaperUploadEmail from "../../emails/PaperUploadMail";

export async function sendSuccessfulUploadPaperEmail(
  author: Author[],
  papername: string,
  paperurl: string,

): Promise<ApiResponse> {
  try {
    const authorEmails = author.map((author) => author.emailId); // Convert to array

    console.log("Sending email to:", authorEmails);

    await resend.emails.send({
      from: 'editorial@jedsd.com',
      to: authorEmails, // Pass array instead of a string
      subject: 'JEDSD Successful Upload Mail',
      react: PaperUploadEmail({ paperName: papername , paperurl}),
    });

    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
