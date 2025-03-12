import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
  email: string,
  username: string,
  otp: string
): Promise<ApiResponse> {
  try {
    console.log('Sending verification email...');
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Verification code:', otp);
    
    
    await resend.emails.send({
      from: 'editorial@jedsd.com',
      to: email,
      subject: 'JEDSD Varification Code',
      react: VerificationEmail({ username, otp }),
    });
    console.log('Verification email sent successfully.');
    console.log('otp', otp);
    
    
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
