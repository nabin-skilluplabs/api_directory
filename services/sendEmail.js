
import sgMail from '@sendgrid/mail';
import { da } from 'date-fns/locale';

if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is missing.');
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendOTP(data) {
    try {
        const msg = {
            to: data.email,
            from: process.env.FROM_EMAIL, 
            subject: `${data.code} is your verifcation code`,
            template_id: "d-12c44c526ba047a89fb0914c87a2289a",
            dynamic_template_data: data
                
            }
            await sgMail.send(msg);
            console.log('OTP sent successfully!');
        }

       
     catch (error) {
        console.error('Error sending OTP:', error);
        throw new Error('Failed to send OTP');
    }
}

  