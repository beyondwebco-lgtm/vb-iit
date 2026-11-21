import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      studentName,
      parentName,
      mobileNumber,
      interestedProgram,
      currentClass,
      message,
      honeypot, // spam protection
    } = data;

    // Honeypot spam detection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // Server-side validation
    if (!studentName || typeof studentName !== "string" || studentName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid student name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!parentName || typeof parentName !== "string" || parentName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid parent or guardian name." },
        { status: 400 }
      );
    }

    const cleanMobile = (mobileNumber || "").replace(/[^0-9]/g, "");
    if (!cleanMobile || cleanMobile.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit mobile phone number." },
        { status: 400 }
      );
    }

    if (!interestedProgram) {
      return NextResponse.json(
        { error: "Please select an interested academic program." },
        { status: 400 }
      );
    }

    // Submission log for administrative records
    const submissionRecord = {
      id: "ENQ-" + Date.now(),
      timestamp: new Date().toISOString(),
      studentName: studentName.trim(),
      parentName: parentName.trim(),
      mobileNumber: cleanMobile,
      interestedProgram,
      currentClass: currentClass || "Not specified",
      message: message ? message.trim() : "",
      status: "RECEIVED",
    };

    console.log("[VB IIT Academy Enquiry Received]:", submissionRecord);

    // If an external email or CRM webhook is configured via environment variables:
    if (process.env.EMAIL_SERVICE_API_KEY) {
      // In production, integrate with SendGrid, Resend, or AWS SES
      console.log("[Notification]: External email dispatch enabled.");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our admissions counselor will contact you shortly.",
      referenceId: submissionRecord.id,
    });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry. Please call us directly." },
      { status: 500 }
    );
  }
}
