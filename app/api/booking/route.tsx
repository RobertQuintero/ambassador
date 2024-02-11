// api/send/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import { resendApi } from "../env";
import { EmailBookingResponse } from "@/emails/emailBookingResponse";
import { EmailToAmbassadorBooking } from "@/emails/emailToAmbassadorBooking";

const resend = new Resend(resendApi);


export async function POST(request: NextRequest) {
  const { name, email, message, branch,mobileNumber,bookingDate,service } = await request.json();

  await resend.batch.send([
  {
    from: "Ambassador <work@robertquintero.me>",
    to: [email],
    subject: `!Booking Acknowledgment - ${service}`,
    reply_to: "work@robertquintero.me",
    react: EmailBookingResponse({ name, email, message, mobileNumber,bookingDate,branch,service }),
    text: "", // Add this line
  },
  {
    from: "Ambassador <work@robertquintero.me>",
    to:  [
        siteConfig.recruiter.person1,
        siteConfig.recruiter.person2,
        siteConfig.recruiter.person3,
      ],
    subject: `!Booking Scheduled ${branch} - ${name}`,
    reply_to: "work@robertquintero.me",
    react: EmailToAmbassadorBooking({ name, email, message, mobileNumber ,bookingDate,branch,service }),
    text: "", // Add this line
  },
  ]);
  return NextResponse.json({ status: "ok" });
}

//why is this not working?? I'm getting a 504 Gateway Timeout error when I try to send a message
//I'm not sure what I'm doing wrong here. I'm following the docs exactly.
