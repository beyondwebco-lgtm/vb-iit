import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, CheckCircle, Clock, Calendar } from "lucide-react";
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
      <section className="bg-gradient-to-br from-[#071434] via-[#0B1F4C] to-[#143B8A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
            <span>Admissions Desk • Academic Session 2026-27</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Admissions Procedures & Student Enrollment
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Welcome to Vidyarthi Bhavan IIT Academy. Join our community of motivated learners, dedicated teachers, and future nation builders in Narasannapeta.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Admission Steps & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Procedures & Information (6 cols) */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Step-by-Step Enrollment
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F4C] tracking-tight">
                  How to Join VB IIT Academy
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our transparent admission process ensures parents and students understand our academic philosophy, foundational rigor, and value-based environment.
                </p>
              </div>

              {/* 4 Steps */}
              <div className="space-y-4">
                {institutionData.admissionSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] text-white font-mono font-bold flex items-center justify-center shrink-0 shadow-sm text-sm">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#0B1F4C]">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contacts Box */}
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 space-y-4">
                <h3 className="font-extrabold text-base text-[#0B1F4C]">
                  Direct Admissions Assistance
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {institutionData.contact.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${institutionData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20VB%20IIT%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
                  <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>Office Timing: {institutionData.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Online Application
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F4C] tracking-tight">
                  Submit Admission Enquiry
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Fill out this form and our academic counselor will connect with you to discuss eligibility, fee structures, and campus counseling.
                </p>
              </div>

              <Suspense fallback={<div className="p-8 text-center text-sm text-slate-500">Loading form...</div>}>
                <EnquiryForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F4C]">
              Admissions FAQ
            </h2>
            <p className="text-slate-600 text-sm">
              Common questions answered for parents considering Vidyarthi Bhavan IIT Academy.
            </p>
          </div>

          <div className="space-y-4">
            {institutionData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-2"
              >
                <h3 className="font-bold text-base text-[#0B1F4C]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
