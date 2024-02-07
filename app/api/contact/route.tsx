// api/send/route.ts
import { EmailContactResponse } from "@/emails/emailContactResponse";
import { EmailToAmbassadorContactApplication } from "@/emails/emailToAmbassadorContactApplication";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import { resendApi } from "../env";

const resend = new Resend(resendApi);


export async function POST(request: NextRequest) {
  const { name, email, message, subject } = await request.json();

  await resend.batch.send([
  {
    from: "Ambassador <work@robertquintero.me>",
    to: [email],
    subject: subject,
    reply_to: "work@robertquintero.me",
    react: EmailContactResponse({ name, email, message, subject }),
    text: "", // Add this line
  },
  {
    from: "Ambassador <work@robertquintero.me>",
    to:  [
        siteConfig.recruiter.person1,
        siteConfig.recruiter.person2,
        siteConfig.recruiter.person3,
      ],
    subject: subject,
    reply_to: "work@robertquintero.me",
    react: EmailToAmbassadorContactApplication({ name, email, message, subject }),
    text: "", // Add this line
  },
  ]);
  return NextResponse.json({ status: "ok" });
}

//why is this not working?? I'm getting a 504 Gateway Timeout error when I try to send a message
//I'm not sure what I'm doing wrong here. I'm following the docs exactly.
