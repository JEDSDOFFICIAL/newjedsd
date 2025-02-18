import { resend } from "@/lib/resend";
import { ApiResponse } from '@/types/ApiResponse';
import SuccessAuthentication from "../../emails/SuccessAuthenticate";

export async function sendSuccessfulAuthEmail(
  email: string,
  username: string,
): Promise<ApiResponse> {
  try {
    console.log('Sending verification email...');
    console.log('Email:', email);
    console.log('Username:', username);
    
    await resend.emails.send({
      from: 'host@jedsd.com',
      to: email,
      subject: 'JEDSD Successful Authentication',
      react: SuccessAuthentication({ username }),
    });
 
    
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
