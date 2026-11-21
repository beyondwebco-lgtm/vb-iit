import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, Clock } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Admissions 2026-27 | Procedures & Enquiry Form",
  description:
    "Apply for admission at Vidyarthi Bhavan IIT Academy, Narasannapeta. Check procedures, eligibility criteria, and submit your online enquiry.",
};

export default function AdmissionsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
            <span>Admissions Desk • Academic Session 2026-27</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Admissions Procedures & Student Enrollment
          </h1>
          <p className="text-[#E3EAF7] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Welcome to Vidyarthi Bhavan IIT Academy. Join our community of motivated learners, dedicated teachers, and future nation builders in Narasannapeta.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Admission Steps & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Procedures & Information (6 cols) */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3 py-1 rounded-full">
                  Step-by-Step Enrollment
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D] tracking-tight">
                  How to Join VB IIT Academy
                </h2>
                <p className="text-[#5B6B8C] text-sm sm:text-base leading-relaxed">
                  Our transparent admission process ensures parents and students understand our academic philosophy, foundational rigor, and value-based environment.
                </p>
              </div>

              {/* 4 Steps */}
              <div className="space-y-4">
                {institutionData.admissionSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white font-mono font-bold flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(37,99,235,0.25)] text-sm">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#0A1B3D]">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contacts Box */}
              <div className="p-6 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] space-y-4">
                <h3 className="font-extrabold text-base text-[#0A1B3D]">
                  Direct Admissions Assistance
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4 text-[#38BDF8]" />
                    <span>Call: {institutionData.contact.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${institutionData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20VB%20IIT%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#0A1B3D] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(30,64,175,0.25)] hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6B8C] justify-center">
                  <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Office Timing: {institutionData.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3 py-1 rounded-full">
                  Online Application
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D] tracking-tight">
                  Submit Admission Enquiry
                </h2>
                <p className="text-[#5B6B8C] text-xs sm:text-sm">
                  Fill out this form and our academic counselor will connect with you to discuss eligibility, fee structures, and campus counseling.
                </p>
              </div>

              <Suspense fallback={<div className="p-8 text-center text-sm text-[#5B6B8C]">Loading form...</div>}>
                <EnquiryForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions: Alternate Section Soft Surface */}
      <section className="py-16 bg-[#F5F8FF] border-t border-[#E3EAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D]">
              Admissions FAQ
            </h2>
            <p className="text-[#5B6B8C] text-sm">
              Common questions answered for parents considering Vidyarthi Bhavan IIT Academy.
            </p>
          </div>

          <div className="space-y-4">
            {institutionData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E3EAF7] shadow-[0_2px_8px_rgba(37,99,235,0.04)] space-y-2"
              >
                <h3 className="font-bold text-base text-[#0A1B3D]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
