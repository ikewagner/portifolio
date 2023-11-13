import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email/email-template';
import { Resend } from 'resend';

interface CreateEmailOptions {
    from: string;
    to: string[];
    subject: string;
    text: string; // This is the missing property
    react?: React.ReactNode;
    html?: string;
  }

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        text: 'Hello, this is the plain text content', // Add this line
        react: EmailTemplate({ firstName: 'John' }),
      });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};